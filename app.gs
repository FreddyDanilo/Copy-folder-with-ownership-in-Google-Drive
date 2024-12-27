function copyFolderWithOwnership() {
  const sourceFolderId = "PASTE_YOUR_FOLDER_ID_HERE";
  const destinationFolderName = "TYPE_THE_FOLDER_NAME_HERE";

  const sourceFolder = DriveApp.getFolderById(sourceFolderId);
  const destinationFolder = DriveApp.createFolder(destinationFolderName);

  Logger.log(
    `Created: ${destinationFolder.getName()} (ID: ${destinationFolder.getId()})`
  );

  function copyContents(source, destination) {
    const files = source.getFiles();
    const subfolders = source.getFolders();

    while (files.hasNext()) {
      const file = files.next();
      try {
        const copiedFile = file.makeCopy(file.getName(), destination);

        Logger.log(`Copied: ${copiedFile.getName()}`);
      } catch (error) {
        Logger.log(`Error copying: ${file.getName()} - ${error.message}`);
      }
    }

    while (subfolders.hasNext()) {
      const subfolder = subfolders.next();
      const newSubfolder = destination.createFolder(subfolder.getName());

      Logger.log(`Created: ${newSubfolder.getName()}`);

      copyContents(subfolder, newSubfolder);
    }
  }

  copyContents(sourceFolder, destinationFolder);

  Logger.log("Done. Developed by Freddy Danilo :)");
}
