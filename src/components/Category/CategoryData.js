export class CategoryData {
    
  static categories = {
    'Fruits': [
      "apple", "banana", "grape", "watermelon", "orange", "mango",
      "pineapple", "strawberry", "lemon", "peach", "papaya", "lychee",
      "dragonfruit", "durian", "blueberry", "cranberry"
    ],

    'Animals': [
      "dog", "cat", "lion", "tiger", "elephant", "giraffe", "monkey",
      "bear", "zebra", "wolf", "fox", "rabbit", "kangaroo", "panda",
      "horse", "cow", "sheep", "goat", "chicken", "duck", "pig",
      "camel", "snake", "frog"
    ],

    'Countries': [
      "thailand", "USA", "UK", "canada", "australia",
      "china", "japan", "southkorea", "india", "germany",
      "france", "italy", "spain", "russia", "brazil",
      "mexico", "argentina", "egypt", "sweden", "norway", "netherlands"
    ]
  };

  static getAllCategoryNames() {
    return Object.keys(CategoryData.categories);
  }

  static getWordsByCategory(categoryName) {
    return CategoryData.categories[categoryName] || [];
  }
}
