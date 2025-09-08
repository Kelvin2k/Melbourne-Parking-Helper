# Environment Setup

## Required Environment Variables

Before running the application, you need to set the following environment variables for Alibaba Cloud OSS integration:

### macOS/Linux:
```bash
export ALIBABA_ACCESS_KEY_ID="your_actual_access_key_id"
export ALIBABA_ACCESS_KEY_SECRET="your_actual_access_key_secret"
```

### Windows Command Prompt:
```cmd
set ALIBABA_ACCESS_KEY_ID=your_actual_access_key_id
set ALIBABA_ACCESS_KEY_SECRET=your_actual_access_key_secret
```

### Windows PowerShell:
```powershell
$env:ALIBABA_ACCESS_KEY_ID="your_actual_access_key_id"
$env:ALIBABA_ACCESS_KEY_SECRET="your_actual_access_key_secret"
```

## How to Get Alibaba Cloud Credentials

1. Log in to your Alibaba Cloud console
2. Go to AccessKey Management
3. Create a new AccessKey pair
4. Use the AccessKey ID and AccessKey Secret in the environment variables above

## Security Note

Never commit actual credentials to version control. Always use environment variables or secure configuration management systems for sensitive information.
