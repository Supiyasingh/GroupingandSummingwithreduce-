function groupAndCountCategories(categories) {
    // Step 1: Use reduce() to count occurrences of each category
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1; // Increment count or initialize to 1
        return acc;
    }, {});

    return categoryCounts;
}

function sortCategoriesByCount(categories) {
    // Step 2: Group and count categories
    const categoryCounts = groupAndCountCategories(categories);

    // Step 3: Use Object.entries() and sort() to sort by count in descending order
    const sortedCategories = Object.entries(categoryCounts)
        .sort(([, countA], [, countB]) => countB - countA) // Sort by counts in descending order
        .map(([category]) => category); // Extract only the category names

    return sortedCategories;
}

// Example usage
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Part 1: Count occurrences
const counts = groupAndCountCategories(categories);
console.log("Counts:", counts); // Output: { electronics: 2, clothing: 2, toys: 3 }

// Part 2: Sort categories by count
const sorted = sortCategoriesByCount(categories);
console.log("Sorted Categories:", sorted); // Output: ["toys", "electronics", "clothing"]
