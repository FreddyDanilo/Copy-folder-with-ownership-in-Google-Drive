# Copy Folder With Ownership in Google Drive ✨

This repository contains a script written in **Google Apps Script** to copy an entire folder in Google Drive, including its files and subfolders, while preserving the original structure and transfer the ownership for all the files and folder for who execute this script.

---

## How It Works 🔧

The script performs the following actions:

1. Creates a new folder with the specified name in Google Drive.
2. Copies all files and subfolders from the source folder to the new folder.
3. Maintains the hierarchical structure of the source folder.

---

## Setup and Usage ✅

### Step 1: Configure the Script

1. Open Google Apps Script: [script.google.com](https://script.google.com).
2. Create a new project and replace the content with the provided code.
3. Update the following variables in the script:
   - `PASTE_YOUR_FOLDER_ID_HERE`: Replace with the ID of the source folder you want to copy.
   - `TYPE_THE_FOLDER_NAME_HERE`: Change to the desired name for the new folder.

### Step 2: Authorize the Script

When running the script for the first time, you will need to grant permissions for it to access and modify your Google Drive.

### Step 3: Run the Script

1. Click **Run** in the Apps Script editor.
2. Select the `copyFolderWithOwnership` function.
3. Check the logs in the editor panel to monitor the progress.

---

## Limitations ⚠️

- This script requires access permissions to Google Drive.
- Ensure you have enough space in your Google Drive for the copy.
- You have to keep the script running until finish the process.

---

## Support This Project 🙏

If this script was helpful to you, consider supporting:

- **[Donate](https://donate.stripe.com/5kA0345oU6kvg5G5kl)**

Thank you for using the script and give a star please! 🙌
