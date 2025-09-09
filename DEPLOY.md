# Melbourne Parking Helper

## 🚀 Deploy to Vercel

This project can be deployed to Vercel for the frontend component.

### Prerequisites

1. GitHub account
2. Vercel account (sign up at vercel.com)

### Deployment Steps

1. **Push to GitHub** (already done)

   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository: `Kelvin2k/Melbourne-Parking-Helper`
   - Vercel will automatically detect the project configuration from `vercel.json`
   - Click "Deploy"

3. **Environment Variables for Backend API**
   - In Vercel dashboard, go to your project settings
   - Add environment variables if needed for API endpoints

### Project Structure

- Frontend: Vue.js app in `AchievementsManageSystem_front/`
- Backend: Spring Boot app in `results-management-backend/` (deploy separately)

### Backend Deployment Options

- **Railway**: Easy Spring Boot deployment
- **Heroku**: Traditional choice (paid plans)
- **Render**: Free tier available
- **AWS/Azure**: Cloud platform deployment

### Environment Variables Needed

- `ACCESS_KEY_ID`: Your Alibaba Cloud access key
- `ACCESS_KEY_SECRET`: Your Alibaba Cloud secret key
- Database connection string for production

### API Configuration

Update the API base URL in the frontend for production deployment.
