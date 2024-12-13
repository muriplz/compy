<script setup>
import {ref} from "vue";

import Header from "@/components/Header.vue";
import HorizontalVideoEntry from "@/components/HorizontalVideoEntry.vue";
import VerticalVideoEntry from "@/components/VerticalVideoEntry.vue";
import ContactMe from "@/components/ContactMe.vue";

// Import videos
import Trailer1 from "@/assets/media/Trailer1.mp4";
import Punkturk from "@/assets/media/Punkturk.mp4";
import Musicvidturk from "@/assets/media/Musicvidturk.mp4";
import Redstartrain from "@/assets/media/Redstartrain.mp4";
import Gamincomp from "@/assets/media/Gamincomp.mp4";
import Kryeitrailer from "@/assets/media/Kryeitrailer.mp4";
import Fados from "@/assets/media/Fados.mp4";
import Albania from "@/assets/media/Albania.mp4";
import Jollyweek2024 from "@/assets/media/Jollyweek2024.mp4";
import Egersundsk8 from "@/assets/media/Egersundsk8.mp4";
import Asmt241 from "@/assets/media/Asmt241.mp4";
import tresDhexOG1 from "@/assets/media/3DhexOG1.mp4";


import {useMeta} from "vue-meta";
import RevyvalSection from "@/components/RevyvalSection.vue";

useMeta({
  title: 'Sancho Vegard - Portfolio',
  meta: [
    {
      vmid: 'description',
      name: 'description',
      content: 'Welcome to the portfolio of Sancho Vegard. Explore creative projects, including short films, documentaries, and gaming content.'
    }
  ]
})

// Initialize video entries
const horizontalVideoEntries = ref([
  {
    title: 'Compilation of Footage Edited for Urban Exploring',
    src: Redstartrain,
    description: 'This is a compilation of shots from an urban exploring adventure at the Red Star Train Graveyard in Budapest, Hungary. Editing the end of this 4-minute video was the most enjoyable part of the project.',
    id: 4,
  },
  {
    title: 'Low Budget Short Movie Footage Compilation',
    src: Trailer1,
    description: 'These are some of shots/scenes mashed up into a ⅔ min “trailer”. All of which were directed and edited by me while I was studying abroad in Budapest Metropolitan University. It was initially challenging to make visually appealing imagery and content due to covid-19 restrictions, meaning smaller teams and equipment shortage. But I got quite a lot out of the experience regardless. We really had to get creative to make some solid stories in some hard times, and I am positive we got to make the best out of what we had. This led to some real fun working environments, and a great team working towards same vision, motivated and optimistic about it. The last scene being my personal favorite.',
    containsSlurs: true,
    id: 1,
  },
  {
    title: 'Short Documentary Compilation',
    src: Punkturk,
    description: 'This video features selected shots from a short documentary about punk culture in Istanbul, Turkey. Over five days of shooting, my colleague Emre and I interviewed local punk bands and followed their daily lives. Despite a packed schedule, we managed to write a song, record it, and shoot a music video. The entire process was enriching—I learned a great deal, met fascinating people, and even picked up some Turkish behind the scenes. However, editing the footage was quite challenging.',
    containsSlurs: true,
    id: 2,
  },
  {
    title: 'Part of the Music Video for the Turkish Punk Short-Documentary',
    src: Musicvidturk,
    description: 'This clip is from the song and music video we produced on the fifth day of shooting for the documentary mentioned above.',
    id: 3,
  },

  {
    title: 'Favorite Edits for Gaming YouTubers/Streamers',
    src: Gamincomp,
    description: 'I\'ve also enjoyed editing content for gaming YouTubers and streamers. This lighter, comedic approach to editing is always fun and allows for creative, silly moments. It’s a refreshing break from traditional editing styles.',
    containsSlurs: true,
    id: 5,
  },
  {
    title: 'Trailer for the Minecraft Server Kryeit',
    src: Kryeitrailer,
    description: 'Creating a trailer for the Minecraft server Kryeit was a unique challenge. Initially unsure how to make a game of “blocks” appear cinematic, I collaborated with the server admin to install mods and find engaging ways to showcase the server. I’m very pleased with the creative solutions we developed and the final result.',
    id: 6,
  },

]);

const verticalVideoEntries = ref([
  {
    title: 'Short “Social Media” Videos from Various Events',
    src: Asmt241,
    description: 'This section features short videos, typically no longer than a minute, from various trips and events. I am comfortable with this format and am continually improving. Here are some examples of aftermovies I’ve created for social media:',
    id: 7,
  },
  {
    title: 'Making of Compilation:',
    src: tresDhexOG1,
    description: 'This video showcases the creation of a 3D-printed Hextech Chest prop from Arcane/League of Legends. With dynamic, rhythmic editing and detailed close-up shots, it highlights the intricate crafting process. The transitions and animations, especially those mimicking Jinx\'s flashbacks, add intensity and flair. Filming and editing this project was a rewarding experience, celebrating artistry and 3d precision.',
    id: 8,
  },
  {
    title: 'Faro, Portugal',
    src: Fados,
    description: 'Faro offered the perfect opportunity to experiment with my newly acquired 50mm lens, resulting in a soothing and beautifully captured vacation. For the editing, I tried a vintage-inspired style, lending the video a nostalgic and precious quality. It remains a personal favorite, both for its visuals and the memories it preserves.',
    id: 8,
  },
  {
    title: 'Skating Event in Norway',
    src: Egersundsk8,
    description: 'Egersund Skateclub, from a small town in Norway gathered around to have a fun session at the closest indoor-skatepark, 4 hours away through overwhelmingly big amounts of snow and a little bit of ice-drifting (professional driver behind the wheel, do not attempt)',
    id: 10,
  },
  {
    title: 'Albania',
    src: Albania,
    description: 'An energetic edit compiling the roadtrip of 3 friends through Albania with one action camera and a small drone, the images are full of rhythm in a chaotic way, just like roads of the country itself.',
    id: 8,
  },
  {
    title: 'Hertogenbosch (Netherlands)',
    src: Jollyweek2024,
    description: 'A rather more relaxing energy to this one, exploring around Hertogenbosch with easy going visuals, soothing activities and music.',
    id: 9,
  },

]);
</script>

<template>

  <Header/>

  <p class="about-me">
    Hello there, my name is Sancho, and this is my vault of content where you can explore some of my creations.
    I’ve selected footage from my favorite projects, whether I produced, edited, or directed them. Then created a 2-4 minute
    compilation videos for some of the categories I've worked on, with descriptions for context underneath. Take a look around and enjoy!
  </p>

  <div class="video-entries-container">
    <VerticalVideoEntry
        :id="entry.id"
        v-for="(entry, index) in verticalVideoEntries"
        :key="index"
        :index="index"
        :title="entry.title"
        :src="entry.src"
        :description="entry.description"
    />

    <RevyvalSection/>

    <HorizontalVideoEntry
        :id="entry.id"
        v-for="(entry, index) in horizontalVideoEntries"
        :key="index"
        :title="entry.title"
        :src="entry.src"
        :description="entry.description"
        :containsSlurs="entry.containsSlurs"
    />


  </div>

  <ContactMe/>
</template>

<style scoped>
.about-me {
  padding: 8px;
  background-color: var(--color-background-mute);
  border-radius: 10px;
  border: 1px solid var(--color-text);
  font-size: 22px;
  text-align: center;
  margin: 0 20px 20px 20px;
}

.video-entries-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

@media(max-width: 800px) {
  .about-me {
    font-size: 16px;
  }
}
</style>
