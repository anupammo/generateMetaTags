function generateMetaTags() {
    const pageTitle = document.getElementById("pageTitle").value.trim();
    const metaDescription = document.getElementById("metaDescription").value.trim();
    const ogUrl = document.getElementById("ogUrl").value.trim();
    const ogImage = document.getElementById("ogImage").value.trim();
    const twitterCard = document.getElementById("twitterCard").value.trim();
    const twitterUrl = document.getElementById("twitterUrl").value.trim();
  
    let metaTags = `<!-- Primary Meta Tags -->\n`;
    if (pageTitle) metaTags += `<title>${pageTitle}</title>\n<meta name="title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta name="description" content="${metaDescription}">\n`;
  
    metaTags += `\n<!-- Open Graph / Facebook -->\n`;
    if (ogUrl) metaTags += `<meta property="og:url" content="${ogUrl}">\n`;
    if (pageTitle) metaTags += `<meta property="og:title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta property="og:description" content="${metaDescription}">\n`;
    if (ogImage) metaTags += `<meta property="og:image" content="${ogImage}">\n`;
  
    metaTags += `\n<!-- Twitter -->\n`;
    if (twitterCard) metaTags += `<meta property="twitter:card" content="${twitterCard}">\n`;
    if (twitterUrl) metaTags += `<meta property="twitter:url" content="${twitterUrl}">\n`;
    if (pageTitle) metaTags += `<meta property="twitter:title" content="${pageTitle}">\n`;
    if (metaDescription) metaTags += `<meta property="twitter:description" content="${metaDescription}">\n`;
    if (ogImage) metaTags += `<meta property="twitter:image" content="${ogImage}">\n`;
  
    document.getElementById("output").value = metaTags;
  }
  