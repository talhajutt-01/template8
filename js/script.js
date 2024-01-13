const title = document.getElementById('title');

const h0 = document.getElementById('h0');   
const h1 = document.getElementById('h1');                                   
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');

const j0 = document.getElementById('j0');
const j1 = document.getElementById('j1');
const j2 = document.getElementById('j2');
const j3 = document.getElementById('j3');
const j4 = document.getElementById('j4');
const j5 = document.getElementById('j5');
const j6 = document.getElementById('j6');
const j7 = document.getElementById('j7');
const j8 = document.getElementById('j8');
const j9 = document.getElementById('j9');
const j10 = document.getElementById('j10');
const j11 = document.getElementById('j11');

const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');

const i0 = document.getElementById('i0');
const i1 = document.getElementById('i1');
const i2 = document.getElementById('i2');
const i3 = document.getElementById('i3');
const i4 = document.getElementById('i4');
const i5 = document.getElementById('i5');
const i6 = document.getElementById('i6');
const i7 = document.getElementById('i7');
const i8 = document.getElementById('i8');
const i9 = document.getElementById('i9');
const i10 = document.getElementById('i10');
const i11 = document.getElementById('i11');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');
const img17 = document.getElementById('img17');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img20 = document.getElementById('img20');



// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateContent(h0, jsonData.header.h0);
            updateContent(h1, jsonData.header.h1);
            updateContent(h2, jsonData.header.h2);
            updateContent(h3, jsonData.header.h3);
            updateContent(h4, jsonData.header.h4);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            
            updateContent(s1, jsonData.cold.s1);
            updateContent(s2, jsonData.cold.s2);
            updateContent(s3, jsonData.cold.s3);
            updateContent(s4, jsonData.cold.s4);
            updateContent(s5, jsonData.cold.s5);
            updateContent(s6, jsonData.cold.s6);
            updateContent(s7, jsonData.cold.s7);
            updateContent(s8, jsonData.cold.s8);
            updateContent(s9, jsonData.cold.s9);
            updateContent(s10, jsonData.cold.s10);
            updateContent(s11, jsonData.cold.s11);

            updateContent(b0, jsonData.hot.b0);
            updateContent(b1, jsonData.hot.b1);
            updateContent(b2, jsonData.hot.b2);
            updateContent(b3, jsonData.hot.b3);
            updateContent(b4, jsonData.hot.b4);
            updateContent(b5, jsonData.hot.b5);
            updateContent(b6, jsonData.hot.b6);
            updateContent(b7, jsonData.hot.b7);
            updateContent(b8, jsonData.hot.b8);
            updateContent(b9, jsonData.hot.b9);
            updateContent(b10, jsonData.hot.b10);
            updateContent(b11, jsonData.hot.b11);

            updateContent(j0, jsonData.juice.j0);
            updateContent(j1, jsonData.juice.j1);
            updateContent(j2, jsonData.juice.j2);
            updateContent(j3, jsonData.juice.j3);
            updateContent(j4, jsonData.juice.j4);
            updateContent(j5, jsonData.juice.j5);
            updateContent(j6, jsonData.juice.j6);
            updateContent(j7, jsonData.juice.j7);
            updateContent(j8, jsonData.juice.j8);
            updateContent(j9, jsonData.juice.j9);
            updateContent(j10, jsonData.juice.j10);
            updateContent(j11, jsonData.juice.j11);

            updateContent(a0, jsonData.about.a0);
            updateContent(a1, jsonData.about.a1);
            updateContent(a2, jsonData.about.a2);
            updateContent(a3, jsonData.about.a3);
            updateContent(a4, jsonData.about.a4);
            updateContent(a5, jsonData.about.a5);
           
            updateContent(i0, jsonData.special.i0);
            updateContent(i1, jsonData.special.i1);
            updateContent(i2, jsonData.special.i2);
            updateContent(i3, jsonData.special.i3);
            updateContent(i4, jsonData.special.i4);
            updateContent(i5, jsonData.special.i5);
            updateContent(i6, jsonData.special.i6);
            updateContent(i7, jsonData.special.i7);
            updateContent(i8, jsonData.special.i8);
            updateContent(i9, jsonData.special.i9);
            updateContent(i10, jsonData.special.i10);
            updateContent(i11, jsonData.special.i11);
           
        
            updateContent(c0, jsonData.contact.c0);
            updateContent(c1, jsonData.contact.c1);
            updateContent(c2, jsonData.contact.c2);

       
            updateContent(f0, jsonData.footer.f0);
            updateContent(f1, jsonData.footer.f1);

            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);
            updateImageSrc(img14, jsonData.images.img14);
            updateImageSrc(img15, jsonData.images.img15);
            updateImageSrc(img16, jsonData.images.img16);
            updateImageSrc(img17, jsonData.images.img17);
            updateImageSrc(img18, jsonData.images.img18);
            updateImageSrc(img19, jsonData.images.img19);
            updateImageSrc(img20, jsonData.images.img20);
            
        
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});
