'use strict';

var elError = document.querySelector('.error');
function onInit() {
    fetchRecommendations(renderWidgets, renderError);
}

function renderWidgets(data) {
    if (!data.length) {
        renderError();
        return;
    }

    var elArticlesContainer = document.querySelector('.articles');
    elError.hidden = true;
    var strHTML = '';
    for (var i = 0; i < data.length; i++) {
        const currArticle = data[i];
        strHTML += `
            <a href=${currArticle.url} target="${getAnchorTarget(currArticle)}" class="article">
                <div class="thumbnail-wrapper">
                    <img src="${currArticle.thumbnail[0].url}" onerror="this.src='./assets/taboola-square.jpg'" />
                </div>
                <div class="article-label-wrapper">
                    <span class="label-title">${currArticle.name}</span>
                    ${currArticle.origin === 'sponsored' && `<span class="branding">${currArticle.branding} | Ad</span>`}
                </div>
            </a>
        `;
    }
    elArticlesContainer.innerHTML = strHTML;
}

function getAnchorTarget(article) {
    if (article.origin === 'sponsored') {
        return '_blank';
    } else return '_self';
}

function renderError() {
    elError.hidden = false;
}