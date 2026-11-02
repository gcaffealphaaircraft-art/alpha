"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

type Story = {
  image: string;
  heading: string;
  description: string;
};

type StoryGalleryProps = {
  stories: Story[];
};

export default function StoryGallery({ stories }: StoryGalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const visibleStories = expanded ? stories : stories.slice(0, 8);

  return (
    <>
      <div className={styles.galleryGrid}>
        {visibleStories.map((story, index) => (
          <article className={styles.storyCard} key={`${story.image}-${index}`}>
            <div className={styles.storyPhoto}>
              <Image
                src={`/anniversary/30-year-story-${String(index + 1).padStart(2, "0")}.jpg`}
                alt={`${story.heading}: ${story.description}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 980px) 44vw, 30vw"
                className={styles.coverImage}
                loading={index < 3 ? "eager" : "lazy"}
              />
              <span className={styles.storyYears}>31</span>
            </div>
            <div className={styles.storyCopy}>
              <h3>{story.heading}</h3>
              <p>{story.description}</p>
            </div>
          </article>
        ))}
      </div>
      {stories.length > 8 && (
        <button
          className={styles.readMoreButton}
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
        >
          {expanded ? "View Less" : "View More"}
        </button>
      )}
    </>
  );
}
