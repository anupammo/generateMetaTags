function generateMetaTagsFromContent() {
    // Fetch title
    // const pageTitle = document.querySelector('title') ? document.querySelector('title').textContent :
    // const pageTitle = document.querySelector('title') ? document.querySelector('title').textContent : console.log('⛔ Title tag not found');
    let pageTitle = '';

    // Generate and append the title tag if not already present
    
    // if (!document.querySelector('title')) {
    //     const titleTag = document.createElement('title');
    //     titleTag.textContent = 'No Title tag! Demo content generated | Meta Tag Generator JS';
    //     pageTitle = titleTag.textContent;
    //     document.head.appendChild(titleTag);
    // } else {
    //     const titleTag = document.createElement('title');
    //     titleTag.textContent;
    //     pageTitle = titleTag.textContent;
    //     document.head.appendChild(titleTag);
    // }

    // Check for canonical URL
    const canonicalTag = window.location.href;
    const canonicalURL = document.querySelector('link[rel="canonical"]');
    if (document.querySelector('link[rel="canonical"]')) {
        console.log('✅ Canonical URL exist');
    } else {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        linkTag.setAttribute('href', canonicalTag); // Replace with a relevant favicon URL
        document.head.appendChild(linkTag);
        console.log('⛔ Canonical URL does not exist');
    }

    // Fetch description
    let pageDescription = '';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        pageDescription = metaDescription.getAttribute('content');
        console.log('✅ Meta description found');
    } else {
        console.log('⛔ No Meta description found');
        const firstParagraph = document.querySelector('p');
        if (firstParagraph) {
            pageDescription = firstParagraph.textContent.slice(0, 160);
            console.log('✅ Meta description content fetched from P tag');
        } else {
            pageDescription = "Please write a meta description content for on page search engine optimization within 160 characters for best practice as per the proven on-page SEO algorithm";
            console.log("⛔ No <p></p> tag found");
            // console.log("   Demo Meta description content generated through the script");
        }
    }

    // Create and append meta tags

    const metaTags = [
        { name: "description", content: pageDescription },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { property: "og:image", content: "https://example.com/image.jpg" } // Replace with a relevant image URL
    ];

    // let metaDesc = document.querySelector('meta[name="description"]');
    if (!document.querySelector('meta[name="description"]')) {
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
        // console.log('⛔ ⛔', pageDescription.length);
    } else {
        metaTags.forEach(tag => {
            const metaElement = document.createElement('meta');
            if (tag.property) {
                metaElement.setAttribute('property', tag.property);
                metaElement.setAttribute('content', tag.content);
            }
            document.head.appendChild(metaElement);
        });
        // console.log('⛔ ⛔', pageDescription.length);
    }

    // Optionally create and append favicon if not present

    // if (!document.querySelector('link[rel="icon"]')) {
    //     const linkTag = document.createElement('link');
    //     linkTag.setAttribute('rel', 'icon');
    //     linkTag.setAttribute('href', 'https://example.com/favicon.ico'); // Replace with a relevant favicon URL
    //     document.head.appendChild(linkTag);
    //     console.log('⛔ Favicon does not exist');
    // }

    // Fetch keywords

    // const keywords = document.querySelectorAll('h1, h2, h3');
    // let pageKeywords = Array.from(keywords).map(tag => tag.textContent).join(', ');
}

// Call the function to generate meta tags from content
generateMetaTagsFromContent();
