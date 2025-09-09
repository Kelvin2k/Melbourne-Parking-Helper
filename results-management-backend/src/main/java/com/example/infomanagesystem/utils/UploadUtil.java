package com.example.infomanagesystem.utils;

// This class previously handled file uploads to Alibaba Cloud OSS.
// OSS integration has been removed for Railway deployment.
public class UploadUtil {
    // Dummy methods for compatibility. You can implement local or other cloud
    // storage here if needed.
    public static String uploadImage(Object file) {
        // No-op: OSS removed. Implement your own logic if needed.
        return "File upload not supported. OSS integration removed.";
    }

    public static String deleteFile(String fileName) {
        // No-op: OSS removed. Implement your own logic if needed.
        return "File delete not supported. OSS integration removed.";
    }
}
