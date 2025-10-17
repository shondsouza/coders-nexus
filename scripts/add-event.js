#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function createEvent() {
  console.log('\n🚀 Coders Nexus SDIT - Event Creator\n');

  try {
    // Get event details
    const title = await question('Event Title: ');
    const description = await question('Short Description: ');
    const date = await question('Date (YYYY-MM-DD): ');
    const location = await question('Location: ');
    const tags = await question('Tags (comma-separated): ');
    const featured = await question('Featured event? (y/n): ');
    const organizers = await question('Organizers (comma-separated): ');
    
    // Ask for either registration link or website link
    console.log('\nFor the event link, you can provide either:');
    console.log('- Registration link (for upcoming events)');
    console.log('- Website link (for past events or events without registration)');
    const hasLink = await question('Do you want to add a link? (y/n): ');
    
    let registrationLink = '';
    let websiteLink = '';
    
    if (hasLink.toLowerCase() === 'y') {
      const linkType = await question('Link type - (1) Registration or (2) Website: ');
      const link = await question('Enter the link URL: ');
      
      if (linkType === '1') {
        registrationLink = link;
      } else {
        websiteLink = link;
      }
    }
    
    // Generate slug
    const slug = slugify(title);
    
    // Create event directory
    const eventDir = path.join(__dirname, '..', 'src', 'content', 'events', slug);
    const imageDir = path.join(__dirname, '..', 'public', 'content', 'events', slug);
    
    if (fs.existsSync(eventDir)) {
      console.error(`\n❌ Error: Event "${slug}" already exists!`);
      rl.close();
      return;
    }

    fs.mkdirSync(eventDir, { recursive: true });
    fs.mkdirSync(imageDir, { recursive: true });

    // Create markdown content
    const tagsArray = tags.split(',').map(t => `"${t.trim()}"`).join(', ');
    const organizersArray = organizers.split(',').map(o => `"${o.trim()}"`).join(', ');
    const isFeatured = featured.toLowerCase() === 'y';

    const content = `---
title: "${title}"
description: "${description}"
date: ${date}
location: "${location}"
coverImage: "/content/events/${slug}/cover.webp"
gallery: []
featured: ${isFeatured}
tags: [${tagsArray}]
organizers: [${organizersArray}]
registrationLink: "${registrationLink}"
websiteLink: "${websiteLink}"
published: true
---

## About ${title}

Write your event description here...

## What You'll Learn

- Topic 1
- Topic 2
- Topic 3

## Schedule

**Time** - Activity

- 9:00 AM - Registration
- 10:00 AM - Main Session
- 12:00 PM - Lunch Break
- 1:00 PM - Afternoon Session
- 5:00 PM - Closing

## Registration

Add registration details here...

## Contact

For queries, reach out at events@codersnexus-sdit.org
`;

    // Write index.md
    fs.writeFileSync(path.join(eventDir, 'index.md'), content);
    
    // Create placeholder for cover image
    fs.writeFileSync(
      path.join(imageDir, 'cover.webp'),
      'Add your event cover image here (1200x630px recommended)'
    );

    console.log('\n✅ Event created successfully!');
    console.log(`\n📁 Event files:`);
    console.log(`   - ${path.relative(process.cwd(), path.join(eventDir, 'index.md'))}`);
    console.log(`   - ${path.relative(process.cwd(), imageDir)}/`);
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Edit the markdown file to add full content`);
    console.log(`   2. Add cover image to the images directory (replace the placeholder file)`);
    console.log(`   3. Run 'npm run dev' to see your event`);
    console.log(`\n🌐 URL: /events/${slug}\n`);

  } catch (error) {
    console.error('\n❌ Error creating event:', error.message);
  } finally {
    rl.close();
  }
}

createEvent();