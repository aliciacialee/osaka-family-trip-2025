#!/bin/bash
# Extract HTML content from index.tsx to public/index.html for Netlify deployment

echo "Extracting HTML from index.tsx..."
cat index.tsx | sed -n '/return c\.html(`/,/^  `)/p' | sed '1d;$d' > public/index.html

echo "✅ HTML file generated at public/index.html"
echo "📊 File size: $(wc -l < public/index.html) lines"
echo ""
echo "🚀 Ready for Netlify deployment!"
echo "   Deploy directory: public"
