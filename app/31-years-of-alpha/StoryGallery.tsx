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

function renderDescription(description: string) {
  return description
    .split(
      /(Mr\. Shubhesh Thakore|Mr\. Israel Leppe|Mr\. Cesar Leppe|Mr\. Javier Rincon|Mr\. Arun Xaviour|Mr\. Henry Antonio Barahona|Mr\. Eng\. Saad Jerri|Mr\. Mark Sindone|Mr\. Dean Wood|S M Salman Basheer|Mr\. William Delgado Triviño|Mr\. Mark Brucks|Mr\. Michael Salomon|Ms\. Lina Gervelyte|Mr\. Adrian Ionascu|Mr\. Bernie Iglesias|Ms\. Juliana Christensen|Mr\. Suresh Rahangdale|Mr\. Bruno Falavigna|Mr\. Laurent A\.|Mr\. Sudhir Kesharwani|Mr\. Reddie Reynon|Mr\. Leonardo Gonzalez|Mr\. Pascal Jacquemont|Mr\. Amir Zamri|Mr\. Amyr Qureshi|Mr\. Yegorov Sergey|Mr\. Lalindra Danawardena|Mr\. Gang Wang|Mr\. Mahinshah Shajahan|Mr\. Ratan Pandey)/g,
    )
    .map((part, index) =>
      part === "Mr. Shubhesh Thakore" ||
      part === "Mr. Israel Leppe" ||
      part === "Mr. Cesar Leppe" ||
      part === "Mr. Javier Rincon" ||
      part === "Mr. Arun Xaviour" ||
      part === "Mr. Henry Antonio Barahona" ||
      part === "Mr. Eng. Saad Jerri" ||
      part === "Mr. Mark Sindone" ||
      part === "Mr. Dean Wood" ||
      part === "S M Salman Basheer" ||
      part === "Mr. William Delgado Triviño" ||
      part === "Mr. Mark Brucks" ||
      part === "Mr. Michael Salomon" ||
      part === "Ms. Lina Gervelyte" ||
      part === "Mr. Adrian Ionascu" ||
      part === "Mr. Bernie Iglesias" ||
      part === "Ms. Juliana Christensen" ||
      part === "Mr. Suresh Rahangdale" ||
      part === "Mr. Bruno Falavigna" ||
      part === "Mr. Laurent A." ||
      part === "Mr. Sudhir Kesharwani" ||
      part === "Mr. Reddie Reynon" ||
      part === "Mr. Leonardo Gonzalez" ||
      part === "Mr. Pascal Jacquemont" ||
      part === "Mr. Amir Zamri" ||
      part === "Mr. Amyr Qureshi" ||
      part === "Mr. Yegorov Sergey" ||
      part === "Mr. Lalindra Danawardena" ||
      part === "Mr. Gang Wang" ||
      part === "Mr. Mahinshah Shajahan" ||
      part === "Mr. Ratan Pandey" ? (
        <a
          href={
            part === "Mr. Shubhesh Thakore"
              ? "https://www.linkedin.com/in/shubhesh-thakore-a2a4a5b0/"
              : part === "Mr. Israel Leppe"
                ? "https://www.linkedin.com/in/israel-leppe-0a282914a/"
                  : part === "Mr. Cesar Leppe"
                    ? "https://www.linkedin.com/in/cesar-leppe-01685414a/"
                    : part === "Mr. Javier Rincon"
                      ? "https://www.linkedin.com/in/javier-rincon-8a90b548/"
                      : part === "Mr. Arun Xaviour"
                        ? "https://www.linkedin.com/in/arun-xaviour-5aa9bb88/"
                        : part === "Mr. Henry Antonio Barahona"
                          ? "https://www.linkedin.com/in/henry-antonio-barahona-49b5b425/"
                          : part === "Mr. Eng. Saad Jerri"
                            ? "https://www.linkedin.com/in/eng-saad-jerri-89652761/"
                            : part === "Mr. Mark Sindone"
                              ? "https://www.linkedin.com/in/mark-sindone-5961b62/"
                              : part === "Mr. Dean Wood"
                                ? "https://www.linkedin.com/in/dean-wood-737712b1/"
                                : part === "S M Salman Basheer"
                                  ? "https://www.linkedin.com/in/s-m-salman-basheer-328594197/"
                                  : part === "Mr. William Delgado Triviño"
                                    ? "https://www.linkedin.com/in/william-delgado-trivi%C3%B1o-4a4a1a187/"
                                    : part === "Mr. Mark Brucks"
                                      ? "https://www.linkedin.com/in/mark-brucks-b2b-marketing/"
                                      : part === "Mr. Michael Salomon"
                                        ? "https://www.linkedin.com/in/michael-salomon-7b06118b/"
                                        : part === "Ms. Lina Gervelyte"
                                          ? "https://www.linkedin.com/in/lina-gervelyt%C4%97-097905155/"
                                          : part === "Mr. Adrian Ionascu"
                                            ? "https://www.linkedin.com/in/adrian-ionascu-5009894/"
                                            : part === "Mr. Bernie Iglesias"
                                              ? "https://www.linkedin.com/in/bernieiglesias/"
                                              : part === "Ms. Juliana Christensen"
                                                ? "https://www.linkedin.com/in/juliana-christensen-583971225/"
                                                : part === "Mr. Suresh Rahangdale"
                                                  ? "https://www.linkedin.com/in/suresh-rahangdale-67992b169/"
                                                  : part === "Mr. Bruno Falavigna"
                                                    ? "https://www.linkedin.com/in/bruno-falavigna-b0596885/"
                                                    : part === "Mr. Laurent A."
                                                      ? "https://www.linkedin.com/in/laurent-a-2012ab16/"
                                                      : part === "Mr. Sudhir Kesharwani"
                                                        ? "https://www.linkedin.com/in/sudhir-kesharwani-b9001759/"
                                                        : part === "Mr. Reddie Reynon"
                                                          ? "https://www.linkedin.com/in/reddie-reynon-400811238/"
                                                          : part === "Mr. Leonardo Gonzalez"
                                                            ? "https://www.linkedin.com/in/leogonzalezjara/"
                                                            : part === "Mr. Pascal Jacquemont"
                                                              ? "https://www.linkedin.com/in/pascal-jacquemont-1293b17/"
                                                              : part === "Mr. Amir Zamri"
                                                                ? "https://www.linkedin.com/in/amir-zamri/"
                                                                : part === "Mr. Amyr Qureshi"
                                                                  ? "https://www.linkedin.com/in/amyr-qureshi-5a101167/"
                                                                  : part === "Mr. Yegorov Sergey"
                                                                    ? "https://www.linkedin.com/in/yegorov-sergey-00592931/"
                                                                    : part === "Mr. Lalindra Danawardena"
                                                                      ? "https://www.linkedin.com/in/lalindra-danawardena-883b9423/"
                                                                      : part === "Mr. Gang Wang"
                                                                        ? "https://www.linkedin.com/in/gang-wang-58b701129/"
                                                                        : part === "Mr. Mahinshah Shajahan"
                                                                          ? "https://www.linkedin.com/in/mahinshah/"
                                                                          : "https://www.linkedin.com/in/ratan-pandey-bb57a320/"
          }
          target="_blank"
          rel="noopener"
          key={index}
        >
          {part}
        </a>
      ) : (
        part
      ),
    );
}

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
              <p>{renderDescription(story.description)}</p>
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
