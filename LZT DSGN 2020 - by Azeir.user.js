// ==UserScript==
// @name          LZT DSGN 2020 / by Azeir
// @namespace     http://userstyles.org
// @description	  LOLZTEAM.ORG DESIGN 2020 / by Azeir
// @author        Hack Games
// @homepage      https://userstyles.org/styles/178458
// @include       http://lolz.guru/*
// @include       https://lolz.guru/*
// @include       http://*.lolz.guru/*
// @include       https://*.lolz.guru/*
// @run-at        document-start
// @version       0.20191219195602
// ==/UserScript==
(function() {var css = [
	"body {",
	"background: rgb(23, 20, 23);",
	"}",
	"",
	".button {",
	"    color: #f5f5f5;",
	"    background-color: rgb(34,142,93);",
	"    border-radius: 15px;",
	"    box-shadow: 0 2px 18px 2px rgba(34,142,93);",
	"}",
	"",
	".userBanner {",
	"   border-radius: 15px;",
	"}",
	"",
	".navTabs .navTab.selected .tabLinks a.navigationImage {",
	"    display: none;",
	"}",
	"",
	".homeBannersAds1 {",
	"    display: none;",
	"}",
	"",
	".nodeList .node.current > .nodeInfo > .nodeText > .nodeTitle > a, .nodeList .node .current>div>.nodeTitle>a {",
	"    border-radius: 15px;",
	"}",
	"",
	".forumSearchThreads--Link--Icon {",
	"    border-radius: 15px;",
	"}",
	"",
	"#completeChatbox.chatboxWidget {",
	"    border-radius: 15px;",
	"}",
	"",
	"#completeChatbox.FullVersion {",
	"    border-radius: 15px;",
	"}",
	"",
	".Responsive .mobileSearch .QuickSearch .textCtrl {",
	"    border-radius: 15px;",
	"}",
	"h3.nodeTitle {",
	"    color: #ffffff;",
	"}",
	"",
	"div.topblock.darkBackground.padding15 {",
	"    border-radius: 15px;",
	"}",
	"",
	".SelectExcludedForumsLink {",
	"    display: inline-block;",
	"    line-height: 36px;",
	"    height: 36px;",
	"    width: 36px;",
	"    background: rgb(34,142,93);",
	"    margin-left: 4px;",
	"    border-radius: 3px;",
	"    text-align: center;",
	"    vertical-align: middle;",
	"}",
	"",
	".DiscussionListOptions>div {",
	"    display: inline-block;",
	"    vertical-align: middle;",
	"    margin: 0 2px 0 0;",
	"    border-radius: 15px;",
	"}",
	"",
	".account_alerts .sectionMain {",
	"    overflow: hidden;",
	"    border-radius: 15px;",
	"}",
	"",
	".navigationSideBar>ul {",
	"    background: rgb(39, 39, 39);",
	"    padding: 6px 0;",
	"    border-radius: 15px;",
	"}",
	"",
	".Menu.MenuOpened {",
	"    opacity: 1;",
	"    filter: none;",
	"    display: block !important;",
	"    visibility: visible !important;",
	"    pointer-events: auto;",
	"    -webkit-transform: scale(1) translateY(0);",
	"    -ms-transform: scale(1) translateY(0);",
	"    transform: scale(1) translateY(0);",
	"    border-radius: 20px;",
	"}",
	"",
	"#header {",
	"    border-radius: 50px;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
