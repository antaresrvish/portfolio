const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
require('dotenv').config();

async function pushStoryblokComponents() {
  try {
    const spaceId = process.env.SPACE_ID;
    
    if (!spaceId) {
      console.error('SPACE_ID not found in .env file');
      process.exit(1);
    }
    
    console.log(`Starting Storyblok push for space: ${spaceId}`);

    const componentsDir = path.join(process.cwd(), '.storyblok', 'components');
    const filesDir = path.join(componentsDir, 'files');
    const spaceDir = path.join(componentsDir, spaceId);

    if (!fs.existsSync(filesDir)) {
      console.error('.storyblok/components/files directory not found');
      process.exit(1);
    }

    if (fs.existsSync(spaceDir)) {
      console.log(`Removing existing ${spaceId} directory...`);
      fs.rmSync(spaceDir, { recursive: true, force: true });
    }

    console.log(`Renaming files directory to ${spaceId}...`);
    fs.renameSync(filesDir, spaceDir);

    console.log(`Pushing components to Storyblok space ${spaceId}...`);
    const command = `storyblok comp push --space ${spaceId}`;
    
    try {
      const output = execSync(command, { 
        stdio: 'inherit',
        encoding: 'utf8'
      });
      
      console.log('Components successfully pushed to Storyblok!');
      
    } catch (error) {
      console.error('Error pushing components to Storyblok:', error.message);

      console.log('Renaming directory back to files...');
      if (fs.existsSync(spaceDir)) {
        fs.renameSync(spaceDir, filesDir);
      }
      
      process.exit(1);
    }

    console.log('Renaming directory back to files...');
    if (fs.existsSync(spaceDir)) {
      fs.renameSync(spaceDir, filesDir);
    }
    
    console.log('Storyblok push completed successfully!');
    
  } catch (error) {
    console.error('Unexpected error:', error.message);
    process.exit(1);
  }
}

pushStoryblokComponents();