function generateMetaTagsFromContent() {
    // Fetch title
    // const pageTitle = document.querySelector('title') ? document.querySelector('title').textContent : 'Title tag not found';
    const pageTitle = document.querySelector('title') ? document.querySelector('title').textContent : console.log('⛔ Title tag not found');

    // Fetch description
    let pageDescription = '';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        // pageDescription = metaDescription.getAttribute('content');
        console.log('✅ Meta description found');
    } else {
        const firstParagraph = document.querySelector('p');
        if (pageDescription) {
            pageDescription = firstParagraph ? firstParagraph.textContent.slice(0, 160) : pageDescription;
            console.log('✅ Meta description fetched from P tag');
        } else {
            console.log('⛔ No p tag found');
        }

        console.log('⛔ Meta description not found');
    }

    // Fetch keywords

    // const keywords = document.querySelectorAll('h1, h2, h3');
    // let pageKeywords = Array.from(keywords).map(tag => tag.textContent).join(', ');

    // Create and append meta tags
    const metaTags = [
        { name: "description", content: pageDescription },
        // { name: "keywords", content: pageKeywords },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { property: "og:image", content: "https://example.com/image.jpg" } // Replace with a relevant image URL
    ];

    metaTags.forEach(tag => {
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

    // Generate and append the title tag if not already present
    if (!document.querySelector('title')) {
        const titleTag = document.createElement('title');
        titleTag.textContent = pageTitle;
        document.head.appendChild(titleTag);
    }

    // const canonicalURL = document.querySelector('link[rel="canonical"]') ? console.log('✅ Canonical URL exists') : console.log('⛔ Canonical URL does not exist');

    // Check for canonical URL
    const canonicalTag = window.location.href;
    const canonicalURL = document.querySelector('link[rel="canonical"]');
    if (document.querySelector('link[rel="canonical"]')) {
        // const linkTag = document.createElement('link');
        // linkTag.setAttribute('rel', 'canonical');
        // linkTag.setAttribute('href', canonicalURL); // Replace with a relevant favicon URL
        // document.head.appendChild(linkTag);
        console.log('✅ Canonical URL exist');
    } else {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        linkTag.setAttribute('href', canonicalTag); // Replace with a relevant favicon URL
        document.head.appendChild(linkTag);
        console.log('⛔ Canonical URL does not exist');
    }

    // Optionally create and append favicon if not present

    if (!document.querySelector('link[rel="icon"]')) {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'icon');
        linkTag.setAttribute('href', 'https://example.com/favicon.ico'); // Replace with a relevant favicon URL
        document.head.appendChild(linkTag);
    }
}

// Call the function to generate meta tags from content
generateMetaTagsFromContent();
