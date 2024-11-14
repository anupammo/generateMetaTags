function checkAndCreateMetaTags() {
    const defaultTitle = "Default Title";
    const defaultDescription = "Default description for the page.";
    const defaultCanonicalURL = window.location.href;

    // Check for Title Tag
    let titleTag = document.querySelector('title');
    if (!titleTag) {
        titleTag = document.createElement('title');
        titleTag.textContent = defaultTitle; // Replace with your desired title
        document.head.appendChild(titleTag);
        console.log("Title tag created.");
    } else {
        console.log("Title tag exists.");
    }

    // Check for Canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        canonicalTag.setAttribute('href', defaultCanonicalURL); // Replace with your desired canonical URL
        document.head.appendChild(canonicalTag);
        console.log("Canonical URL created.");
    } else {
        console.log("Canonical URL exists.");
    }

    // Check for Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.setAttribute('name', 'description');
        metaDescriptionTag.setAttribute('content', defaultDescription); // Replace with your desired description
        document.head.appendChild(metaDescriptionTag);
        console.log("Meta description created.");
    } else {
        console.log("Meta description exists.");
    }

    // Create additional necessary meta tags
    const additionalMetaTags = [
        { name: "keywords", content: "keyword1, keyword2, keyword3" },
        { property: "og:title", content: titleTag.textContent },
        { property: "og:description", content: metaDescriptionTag ? metaDescriptionTag.getAttribute('content') : defaultDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonicalTag ? canonicalTag.getAttribute('href') : defaultCanonicalURL },
        { property: "og:image", content: "https://example.com/image.jpg" }, // Replace with your desired image URL
        { name: "viewport", content: "width=device-width, initial-scale=1" }
    ];

    additionalMetaTags.forEach(tag => {
        const metaElement = document.createElement('meta');
        if (tag.name) {
            metaElement.setAttribute('name', tag.name);
            metaElement.setAttribute('content', tag.content);
        } else if (tag.property) {
            metaElement.setAttribute('property', tag.property);
            metaElement.setAttribute('content', tag.content);
        }
        document.head.appendChild(metaElement);
    });

    console.log("Additional meta tags created.");
}

// Call the function to check and create meta tags
checkAndCreateMetaTags();