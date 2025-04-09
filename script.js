function generateMetaTags() {
    const pageTitle = document.getElementById("pageTitle").value.trim();
    const metaDescription = document.getElementById("metaDescription").value.trim();
    const url = document.getElementById("url").value.trim();
    const ogImage = document.getElementById("ogImage").value.trim();
    const twitterCard = document.getElementById("twitterCard").value.trim();

    let rootDomain = "";
    try {
        // Extract the root domain using URL constructor
        const parsedUrl = new URL(url);
        rootDomain = parsedUrl.hostname.replace("www.", ""); // Removes 'www.' if present
    } catch (error) {
        console.error("Invalid URL:", error);
    }

    let metaTags = `<!-- Primary Meta Tags -->\n`;
    if (pageTitle) metaTags += `<title>${pageTitle}</title>\n<meta name="title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta name="description" content="${metaDescription}">\n`;
    if (url) metaTags += `<link rel="canonical" href="${url}">\n`;
    if (rootDomain) metaTags += `<meta name="author" content="${rootDomain}">\n`; // Adding author meta tags
    if (rootDomain) metaTags += `<meta name="url" content="${rootDomain}">\n`; // Adding URL meta tags

    metaTags += `\n<!-- Open Graph / Facebook -->\n`;
    if (url) metaTags += `<meta property="og:url" content="${url}">\n`;
    if (pageTitle) metaTags += `<meta property="og:title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta property="og:description" content="${metaDescription}">\n`;
    if (ogImage) metaTags += `<meta property="og:image" content="${ogImage}">\n`;

    metaTags += `\n<!-- Twitter -->\n`;
    if (twitterCard) metaTags += `<meta property="twitter:card" content="${twitterCard}">\n`;
    if (url) metaTags += `<meta property="twitter:url" content="${url}">\n`;
    if (pageTitle) metaTags += `<meta property="twitter:title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta property="twitter:description" content="${metaDescription}">\n`;
    if (ogImage) metaTags += `<meta property="twitter:image" content="${ogImage}">\n`;

    document.getElementById("output").value = metaTags;
}
