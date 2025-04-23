document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pageTitle").value = document.title;
    document.getElementById("url").value = window.location.href;

    // Auto-fetch featured image from WordPress meta field
    const featuredImage = document.getElementById("mtg_meta_image");
    if (!featuredImage.value) {
        const wpFeaturedImage = document.querySelector("meta[property='og:image']");
        featuredImage.value = wpFeaturedImage ? wpFeaturedImage.getAttribute("content") : "";
    }
});

function generateMetaTags() {
    const pageTitle = document.getElementById("pageTitle").value.trim();
    const metaDescription = document.getElementById("metaDescription").value.trim();
    const url = document.getElementById("url").value.trim();
    const ogImage = document.getElementById("mtg_meta_image").value.trim();
    const ogType = document.getElementById("mtg_og_type").value.trim();
    const twitterCard = document.getElementById("mtg_twitter_card").value.trim();

    let metaTags = `<!-- Primary Meta Tags -->\n`;
    metaTags += `<title>${pageTitle}</title>\n<meta name="description" content="${metaDescription}">\n<link rel="canonical" href="${url}">\n`;

    metaTags += `\n<!-- Open Graph / Facebook -->\n`;
    metaTags += `<meta property="og:type" content="${ogType}">\n<meta property="og:url" content="${url}">\n<meta property="og:title" content="${pageTitle}">\n<meta property="og:description" content="${metaDescription}">\n<meta property="og:image" content="${ogImage}">\n`;

    metaTags += `\n<!-- Twitter -->\n`;
    metaTags += `<meta property="twitter:card" content="${twitterCard}">\n<meta property="twitter:url" content="${url}">\n<meta property="twitter:title" content="${pageTitle}">\n<meta property="twitter:description" content="${metaDescription}">\n<meta property="twitter:image" content="${ogImage}">\n`;

    // Adding Schema Markup (JSON-LD)
    const jsonLD = {
        "@context": "https://schema.org",
        "@type": ogType === "article" ? "Article" : "WebPage",
        "name": pageTitle,
        "url": url,
        "description": metaDescription,
        "image": ogImage
    };

    metaTags += `\n<script type="application/ld+json">${JSON.stringify(jsonLD, null, 2)}</script>\n`;
    document.getElementById("output").value = metaTags;
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("output").value)
        .then(() => alert("Meta tags copied!"))
        .catch(err => console.error("Failed to copy:", err));
}
