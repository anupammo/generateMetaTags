function generateMetaTags() {
    const pageTitle = document.getElementById("pageTitle").value.trim();
    const metaDescription = document.getElementById("metaDescription").value.trim();
    const url = document.getElementById("url").value.trim();
    const ogImage = document.getElementById("ogImage").value.trim();
    const ogType = document.getElementById("ogType").value.trim();
    const twitterCard = document.getElementById("twitterCard").value.trim();

    let rootDomain = "";
    try {
        const parsedUrl = new URL(url);
        rootDomain = parsedUrl.hostname.replace("www.", "");
    } catch (error) {
        console.error("Invalid URL:", error);
    }

    let metaTags = `<!-- Primary Meta Tags -->\n`;
    if (pageTitle) metaTags += `<title>${pageTitle}</title>\n<meta name="title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta name="description" content="${metaDescription}">\n`;
    if (url) metaTags += `<link rel="canonical" href="${url}">\n`;
    if (rootDomain) metaTags += `<meta name="author" content="${rootDomain}">\n`;

    metaTags += `\n<!-- Open Graph / Facebook -->\n`;
    if (url) metaTags += `<meta property="og:url" content="${url}">\n`;
    if (ogType) metaTags += `<meta property="og:type" content="${ogType}">\n`;
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

function copyToClipboard() {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Meta tags copied to clipboard!");
}
