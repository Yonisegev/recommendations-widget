'use strict';
// Used pre-fixed variable names to avoid clashing with host site variables
var TAB_API_KEY = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4';
var TAB_PUBLISHER_ID = 'taboola-templates';
var TAB_APP_TYPE = 'desktop';
var TAB_SOURCE_ID = 'I am the source id';
var TAB_WIDGET_COUNT = 9;
var TAB_URL = `http://api.taboola.com/1.0/json/${TAB_PUBLISHER_ID}/recommendations.get?app.type=${TAB_APP_TYPE}&app.apikey=${TAB_API_KEY}&count=${TAB_WIDGET_COUNT}&source.type=video&source.id=${TAB_SOURCE_ID}&source.url=http://www.site.com/videos/214321562187.html`;
var TABCachedArticles = JSON.parse(localStorage.getItem('TAB_DB')) || [];

function fetchRecommendations(onSuccess, onError) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            localStorage.setItem('TAB_DB', JSON.stringify(data.list));
            onSuccess(data.list);
        } else {
            // Failed to fetch data, if cache has articles, show them, else render error msg
            TABCachedArticles.length > 0 ? onSuccess(TABCachedArticles) : onError();
        }
    };
    xhr.open('GET', `${TAB_URL}`);
    xhr.send();
}