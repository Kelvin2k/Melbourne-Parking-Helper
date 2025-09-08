import { createRouter, createWebHistory } from "vue-router";
import { useRoute, useRouter } from "vue-router";
import ParkingDiscoveryNew from "../views/Parking/ParkingDiscoveryNew.vue";
import DataInsights from "../views/Parking/DataInsights.vue";
const routes = [
  {
    path: "/LoginAndRegister",
    name: "loginandregister",
    component: () => import("../views/System/LoginAndRegister.vue"),
  },
  {
    path: "/",
    name: "layout",
    redirect: "/parking-discovery-new",
    component: () => import("../layout/layout.vue"),
    children: [
      // {
      //     path: "home",ssss
      //     name: "Home",
      //     component: () => import('../views/System/Home.vue'),
      // },
      // {
      //     path: "parking-discovery",
      //     name: "ParkingDiscovery",
      //     component: () => import('../views/Parking/ParkingDiscovery.vue'),
      // },
      {
        path: "parking-discovery-new",
        name: "ParkingDiscoveryNew",
        component: ParkingDiscoveryNew,
      },
      // {
      //     path: "parking-discovery-new2",
      //     name: "ParkingDiscoveryNew2",
      //     component: () => import('../views/Parking/ParkingDiscoveryNew2.vue'),
      // },
      // {
      //     path: "parking-prediction",
      //     name: "ParkingPrediction",
      //     component: () => import('../views/Parking/ParkingPrediction.vue'),
      // },
      {
        path: "data-insights",
        name: "DataInsights",
        component: DataInsights,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
// Navigation guard
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("saToken");
  const role = sessionStorage.getItem("role");
  const requireAdmin = to.meta.requireAdmin; //Whether the page to access requires admin role
  console.log("requireAdmin is ", token);
  if (token) {
    // If token exists, allow access to route
    next();
  } else {
    // If token doesn't exist, redirect to login or register page
    if (
      to.name === "loginandregister" ||
      to.name === "passwordRecovery" ||
      to.name === "wsChart"
    ) {
      next();
    } else {
      next({ name: "loginandregister" });
    }
  }
});

export default router;
