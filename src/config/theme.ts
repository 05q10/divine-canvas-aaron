
export const theme = {
  colors: {
    divine: {
      DEFAULT: '#1A1F2C',
      light: '#D6BCFA',
      accent: '#9b87f5',
      gold: '#FEC6A1',
      cosmic: '#3E4A6B'
    }
  },
  fonts: {
    serif: 'Playfair Display, serif',
    sans: 'Inter, sans-serif'
  },
  gradients: {
    cosmic: 'linear-gradient(to bottom, #1A1F2C, #3E4A6B)',
    divineLight: 'linear-gradient(to right, #FEC6A1, #D6BCFA)'
  },
  animations: {
    easeOutExpo: [0.16, 1, 0.3, 1],
    springRebound: { type: "spring", stiffness: 100, damping: 20 }
  }
};

// Scripture quotes for inspiration
export const scriptures = [
  {
    verse: "And the Spirit of God was hovering over the face of the waters.",
    reference: "Genesis 1:2"
  },
  {
    verse: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
    reference: "Psalm 139:14"
  },
  {
    verse: "He has made everything beautiful in its time. He has also set eternity in the human heart.",
    reference: "Ecclesiastes 3:11"
  }
];

// Art medium types for filtering
export const artMediums = [
  { value: 'all', label: 'All Works' },
  { value: 'painting', label: 'Paintings' },
  { value: 'sketching', label: 'Sketches' },
  { value: 'digital', label: 'Digital' },
  { value: 'abstract', label: 'Abstract' }
];
