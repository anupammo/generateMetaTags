(function(window, document) {
    'use strict';

    function generateMetaTags(config) {
        // Default meta tags
        const defaultMetaTags = [
            { name: "description", content: config.description || "Your page description here" },
            { name: "keywords", content: config.keywords || "keyword1, keyword2, keyword3" },
            { property: "og:title", content: config.ogTitle || "Your Open Graph Title" },
            { property: "og:description", content: config.ogDescription || "Your Open Graph Description" },
            { property: "og:type", content: config.ogType || "website" },
            { property: "og:url", content: config.ogUrl || window.location.href },
            { property: "og:image", content: config.ogImage || "https://example.com/image.jpg" },
            { name: "viewport", content: config.viewport || "width=device-width, initial-scale=1" }
        ];

        // Create meta tags and append to head
        defaultMetaTags.forEach(tag => {
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

        // Generate and append the title tag
        if (config.title) {
            const titleTag = document.createElement('title');
            titleTag.textContent = config.title;
            document.head.appendChild(titleTag);
        }

        // Optionally create and append favicon
        if (config.favicon) {
            const linkTag = document.createElement('link');
            linkTag.setAttribute('rel', 'icon');
            linkTag.setAttribute('href', config.favicon);
            document.head.appendChild(linkTag);
        }
    }

    // Expose the generateMetaTags function to the global object
    window.generateMetaTags = generateMetaTags;

})(window, document);
