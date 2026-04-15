import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const words = [
  { word: "rhythm", hint: "music has a steady one", difficulty: "hard" },
  { word: "colonel", hint: "a military rank above lieutenant colonel", difficulty: "hard" },
  { word: "pneumonia", hint: "a serious lung illness", difficulty: "hard" },
  { word: "wednesday", hint: "the middle day of the working week", difficulty: "medium" },
  { word: "necessary", hint: "something you cannot do without", difficulty: "medium" },
  { word: "february", hint: "the shortest month of the year", difficulty: "medium" },
  { word: "occurrence", hint: "an event or incident", difficulty: "hard" },
  { word: "millennium", hint: "a span of one thousand years", difficulty: "hard" },
  { word: "separate", hint: "to keep or set apart", difficulty: "medium" },
  { word: "definitely", hint: "without any doubt at all", difficulty: "medium" },
  { word: "questionnaire", hint: "a written list of questions", difficulty: "hard" },
  { word: "accommodation", hint: "a place to sleep and stay", difficulty: "hard" },
  { word: "bureaucracy", hint: "excessive rules and red tape", difficulty: "hard" },
  { word: "conscientious", hint: "careful and thorough in all you do", difficulty: "hard" },
  { word: "entrepreneur", hint: "someone who starts their own business", difficulty: "hard" },
  { word: "fluorescent", hint: "a type of bright glowing light", difficulty: "medium" },
  { word: "handkerchief", hint: "a cloth square for the nose", difficulty: "medium" },
  { word: "hypocrite", hint: "says one thing but does another", difficulty: "medium" },
  { word: "liaison", hint: "a communication link between groups", difficulty: "hard" },
  { word: "maintenance", hint: "keeping something in good condition", difficulty: "medium" },
  { word: "language", hint: "how people communicate with words", difficulty: "easy" },
  { word: "elephant", hint: "the largest land animal", difficulty: "easy" },
  { word: "umbrella", hint: "used to stay dry in the rain", difficulty: "easy" },
  { word: "calendar", hint: "tracks days weeks and months", difficulty: "easy" },
  { word: "beautiful", hint: "very pleasing to look at", difficulty: "easy" },
  { word: "mountain", hint: "a very large natural elevation of earth", difficulty: "easy" },
  { word: "sandwich", hint: "fillings between two slices of bread", difficulty: "easy" },
  { word: "adventure", hint: "an exciting and unusual experience", difficulty: "medium" },
  { word: "chocolate", hint: "a sweet food made from cacao", difficulty: "easy" },
  { word: "emergency", hint: "a sudden serious situation requiring action", difficulty: "medium" },
];

async function main() {
  console.log("Seeding database...");
  for (const w of words) {
    await prisma.word.upsert({
      where: { word: w.word },
      update: {},
      create: w,
    });
  }
  console.log(`Seeded ${words.length} words`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
