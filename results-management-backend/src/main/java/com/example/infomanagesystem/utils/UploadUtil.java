package com.example.infomanagesystem.utils;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.ObjectMetadata;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

/**
 * @forerunner
 * @Date 2023-07-20 15:31
 */
// Image upload to OSS utility class
public class UploadUtil {
    // Alibaba OSS domain
    public static final String ALI_DOMAIN = "https://xspfile.yougi.top/"; // Access domain

    // OSS configuration - these should be set via environment variables or configuration
    public static final String endPoint = "http://oss-cn-chengdu.aliyuncs.com";
    // Use environment variables or configuration properties instead of hardcoded values
    public static final String acessKeyID = System.getenv("ALIBABA_ACCESS_KEY_ID");
    public static final String acessKeySecret = System.getenv("ALIBABA_ACCESS_KEY_SECRET");

    public static String uploadImage(MultipartFile file) throws IOException {
        String originalFileName = file.getOriginalFilename();
        String pre = originalFileName.substring(0, originalFileName.lastIndexOf('.')); // Left-closed right-open interval
        String ext = "." + FilenameUtils.getExtension(originalFileName); // File extension
        String uuid = UUID.randomUUID().toString().replace("-", ""); // Replace "-" in uuid
        String fileName = pre + uuid + ext; // Final filename composition
        
        // OSS client object
        OSS ossClient = new OSSClientBuilder().build(endPoint, acessKeyID, acessKeySecret);
        ossClient.putObject("xsp-datastore", fileName, file.getInputStream()); // Three parameters: OSS bucket name
        ossClient.shutdown(); // Close
        
        return ALI_DOMAIN + fileName; // Access path
    }
    
    public static String deleteFile(String fileName) {
        // OSS client object
        OSS ossClient = new OSSClientBuilder().build(endPoint, acessKeyID, acessKeySecret);
        ossClient.deleteObject("xsp-datastore", fileName); // filename xxxx.jpg
        ossClient.shutdown();
        return fileName + " deleted successfully";
    }
}
