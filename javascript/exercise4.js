console.log("\nმაგალითი 4. \nfilter() და forEach() მეთოდები, მართკუთხედების ფართობები"); // მეოთხე მაგალითისათვის
rectangles.filter((item => item.color === 'green' || 'red'))
    .forEach(rectangle => console.log(rectangle.id + ": " + rectangle.width * rectangle.height));

console.log("filter() და map() მეთოდები, მართკუთხედების ფართობები");
rectangles.filter((item => item.color === 'green' || 'red'))
    .map(item => console.log(item.id + ": " + item.width * item.height));
