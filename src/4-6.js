var pageGenerators = {
    top: function () { return "<p>top page</p>"; },
    mypage: function (_a) {
        var userName = _a.userName;
        return "<p>Hello, " + userName + "!</p>";
    },
    ranking: function (_a) {
        var articles = _a.articles;
        return "<h1>ranking</h1>\n         <ul>\n        " + articles.map(function (name) { return "<li>" + name + "</li>"; }).join("") + "</ul>";
    }
};
var renderPage = function (page) { return pageGenerators[page.page](page); };
