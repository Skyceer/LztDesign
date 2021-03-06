// ==UserScript==
// @name          LOLZTEAM RED THEME
// @namespace     http://userstyles.org
// @description	  Красная тема для форума Lolzteam.
// @author        Handler
// @homepage      https://userstyles.org/styles/180354
// @include       http://lolz.guru/*
// @include       https://lolz.guru/*
// @include       http://*.lolz.guru/*
// @include       https://*.lolz.guru/*
// @run-at        document-start
// @version       0.20201108125022
// ==/UserScript==
(function() {var css = [
	".radio-group input[type=radio]:checked+label {",
	"			background: rgb(76, 82, 99)!important;",
	"	}",
	"	.sidebar .visitorPanel .secondaryContent, .SelectExcludedForumsLink {",
	"	    background: none !important;",
	"	}",
	"	.marketSidebar .section .secondaryContent {",
	"	    background: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"	}",
	"	.nodeList .node.current > .nodeInfo > .nodeText > .nodeTitle > a, .nodeList .node .current>div>.nodeTitle>a {",
	"	background: rgba(53, 52, 80, 0.34);",
	"	}",
	"	.discussionListItem:hover {",
	"	    background: rgba(45, 45, 45, 0.15) !important;",
	"	    font-size: 110%;",
	"	}",
	"	div.discussionListItem.unread {",
	"	    transition: 0.2s;",
	"	}",
	"	.node h3.nodeTitle>a:hover {",
	"	background: none !important;",
	"	border: 1px solid;",
	"	}",
	"	.node .nodeText h3.nodeTitle:hover, .node .nodeText h3.nodeTitle:hover .expandSubForumList {",
	"	background: none !important;",
	"	}",
	"	.sidebar .section .secondaryContent {",
	"	    background: none;",
	"	}",
	"		a.close.OverlayCloser {",
	"			margin-top: -11.5px!important;",
	"		}",
	"		h2.heading.h1 {",
	"			color: #ffffff!important;",
	"			font-size: 15px!important;",
	"			font-weight: normal!important;",
	"			margin-left: -10px!important;",
	"			margin-right: -10px!important;",
	"			margin-top: -10px!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		div.xenForm.formOverlay.overlayScroll {",
	"			background-color: #1e1f24!important;",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"		li.active-result.highlighted {",
	"			background-color: #262930!important;",
	"		}",
	"		div.chosen-drop {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.conversationListWrapper.scrollbar-macosx.scrollbar-dynamic.hiddenScrollbar.scroll-content {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.marketItevView--status.clear {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.marketItevView--status.ban {",
	"			border-radius: 15px!important;",
	"			background-color: #262930!important;",
	"		}",
	"		div.messageMeta.ToggleTriggerAnchor {",
	"			border-radius: 15px!important;",
	"		}",
	"		ol.listInline.commaImplode.sectionMain {",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"	.selectForumOverlay.xenOverlay .sectionMain>.nodeList {",
	"	background: rgba(30, 31, 36, 0.75)!important;",
	"	    backdrop-filter: blur(12px) !important;",
	"	}",
	"		div.discussionListItem--Wrapper {",
	"			margin-right: -35px!important;",
	"			margin-left: 15px!important;",
	"		}",
	"		div.marketItevView--status.clear {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.marketItevView--status.ban {",
	"			border-radius: 15px!important;",
	"			background-color: #262930!important;",
	"		}",
	"	.secondaryContent.marketUserPanel {",
	"	    background-color: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"	}",
	"	div.alertNotice.mn-0-0-15 {",
	"	    background-color: hsla(230, 11%, 11%, 0.75)!important;",
	"	    backdrop-filter: blur(12px) !important;",
	"	}",
	"		span.hasUnreadArticles {",
	"			background-color: #F54E50!important;",
	"		}",
	"		div.conversationTemplatesBox {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		ul.primaryContent.smilieContainer.scrollBar {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.conversationViewContainer.ImView {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		img.conversationCapImage {",
	"			box-shadow: 0 2px 18px 2px rgba(223, 60, 66, .4)!important;",
	"		}",
	"		.conversationContainer {",
	"			border-radius: 15px!important;",
	"		}",
	"		a.button.fl_r {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.userIsBanned-notice {",
	"			border-radius: 0 0 15px 15px!important;",
	"			background-color: #262930!important;",
	"			color: #ffffff!important;",
	"		}",
	"		div.searchBarContainer.searchHistoryContainer.mn-0-0-15 {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.marketSidebar {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.marketSidebarMenu {",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"		div.searchBarContainer {",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"		a.button.searchBarForm--searchHistory {",
	"			background-color: #262930!important;",
	"			border-radius: 5px!important;",
	"		}",
	"		div.marketIndexItem--Price {",
	"			border-radius: 5px!important;",
	"		}",
	"		button.searchButton.button.primary {",
	"			border-radius: 15px!important;",
	"		}",
	"		ul.tabs.Tabs {",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"		div.market--titleBar.market--spec--titleBar {",
	"			border-radius: 15px!important;",
	"			background-color: #1e1f24!important;",
	"		}",
	"		h4.mn-0-0-15 {",
	"			color: #F54E50!important;",
	"		}",
	"		a.button.primary.FastBuyItemButton {",
	"			border-radius: 15px!important;",
	"		}",
	"		a.button.ToFavouritesButton {",
	"			border-radius: 15px!important;",
	"			background-color: #4c5263!important;",
	"			color: #ffffff!important;",
	"		}",
	"		div.marketContainer.marketItemView--Container {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.sidebar {",
	"			border-radius: 15px!important;",
	"	box-shadow: -10px 0px 17px -7px rgba(76, 82, 99, 0.4);",
	"		}",
	"		div.marketIndexItem-Badge {",
	"			background-color: #262930!important;",
	"			border-radius: 5px!important;",
	"		}",
	"		.sidebar .section .secondaryContent {",
	"			border-radius: 15px!important;",
	"		}",
	"		.marketContainer {",
	"			border-radius: 15px!important;",
	"		}",
	"		.marketIndex--titleContainer .top {",
	"			box-shadow: none!important;",
	"			background-color: none!important;",
	"		}",
	"		.profilePage .mast .section, div.market--titleBar.market--spec--titleBar, div.marketContainer.marketItemView--Container {",
	"			background: rgba(30, 31, 36, 0.75)!important;",
	"	    backdrop-filter: blur(12px) !important;",
	"		}",
	"		span.hasUnreadArticles {",
	"			background-color: #F54E50;",
	"		}",
	"		input.button.PreviewButton.JsOnly {",
	"			background-color: #4c5263!important;",
	"			border-radius: 15px!important;",
	"			margin-left: 5px!important;",
	"		}",
	"		div.titleBar h1 {",
	"			margin-left: 15px!important;",
	"		}",
	"		p.muted {",
	"			margin-left: 15px!important;",
	"		}",
	"		a.button.OverlayTrigger {",
	"			border-radius: 15px!important;",
	"			background-color: #4c5263!important;",
	"			color: #ffffff!important;",
	"		}",
	"		select.textCtrl.extraLarge {",
	"			background: linear-gradient(0deg, rgba(76, 82, 99, 0.28), rgba(110, 111, 115, 0));",
	"	    color: #ffffff!important;",
	"	    border: 1px solid rgb(76, 82, 99);",
	"	    border-top: none;",
	"	    border-left: none;",
	"	    border-right: none;",
	"		}",
	"		.pollResult .bar {",
	"			background: rgb(38, 41, 48)!important;",
	"		}",
	"		em.userBanner.vate.wrapped {",
	"			border-radius: 10px!important;",
	"		}",
	"		a.button.block {",
	"			box-shadow: 0 2px 18px 2px rgba(54, 54, 54, .3)!important;",
	"		}",
	"		h2.heading.overlayOnly {",
	"			border-radius: 15px 15px 0 0!important;",
	"		}",
	"		.dottesStyle.buttonStyle {",
	"			background-color: rgb(76, 82, 99)!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		div.alertNotice.mn-15-0 {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		a.button.withSendMoneyButton.primary.OverlayTrigger.fl_r {",
	"			border-radius: 15px!important;",
	"		}",
	"		a.actionButton--sendMoney.fl_r.OverlayTrigger.Tooltip {",
	"			border-radius: 15px!important;",
	"		}",
	"		input.button.primary {",
	"			box-shadow: 0 2px 18px 2px rgba(255, 54, 71, .3)!important;",
	"		}",
	"		div.messageMeta.ToggleTriggerAnchor {",
	"			margin-left: 1px!important;",
	"			margin-right: 1px!important;",
	"		}",
	"		div.publicControls {",
	"			margin-right: 20px!important;",
	"		}",
	"		div.privateControls {",
	"			margin-left: 20px!important;",
	"		}",
	"		.xenOverlay.memberCard .avatar.online .img::before {",
	"			background: rgb(223, 60, 66)!important;",
	"		}",
	"		.node .nodeTitle>a:hover {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		input.button.JsOnly {",
	"			background-color: #4c5263!important;",
	"			color: #ffffff!important;",
	"		}",
	"		input.button.OverlayCloser {",
	"			background-color: #4c5263!important;",
	"			color: #ffffff!important;",
	"		}",
	"		h2.heading.overlayOnly {",
	"			color: #ffffff!important;",
	"		}",
	"		div.top {",
	"			background-color: #18191e!important;",
	"			box-shadow: 0 0 20px 0 rgba(255, 54, 71, .3)!important;",
	"		}",
	"		div.bottom {",
	"			background-color: #1e1f24!important;",
	"			box-shadow: 0 0 55px 0 rgba(255, 54, 71, .3)!important;",
	"		}",
	"		div.xenOverlay.memberCard.Checked {",
	"			box-shadow: 0 5px 66px 10px rgba(255, 54, 71, .3)!important;",
	"		}",
	"		button.button.primary.bbCodeSpoilerButton.ToggleTrigger.JsOnly {",
	"			border-radius: 15px!important;",
	"		}",
	"		html.Public.LoggedIn.NoSidebar.Responsive.hasJs.NoTouch.HasDragDrop {",
	"			background-color: #18191e!important;",
	"		}",
	"		div.redactor_box {",
	"			box-shadow: 0 0 .5px 2px rgb(190, 58, 54)!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		div.label label {",
	"			color: #ffffff!important;",
	"		}",
	"		p.explain {",
	"			color: #bdbdbd!important;",
	"		}",
	"		div.label {",
	"			color: #ffffff!important;",
	"		}",
	"		form.xenForm.createThreadForm.Preview.AutoValidator {",
	"			background-color: #1e1f24!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		input.textCtrl.titleCtrl {",
	"			border-radius: 15px!important;",
	"			background-color: #34353d!important;",
	"		}",
	"		.universalSearchForm:before {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		div.hasChangedContactsWarning {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.mainContainer {",
	"			border-radius: 25px;",
	"		}",
	"		div.pageContent {",
	"			background-color: inherit;",
	"		}",
	"		div.discussionList {",
	"			margin-left: -30px!important;",
	"		}",
	"		select.textCtrl.extraLarge {",
	"			border-radius: 15px;",
	"		}",
	"		a.SelectExcludedForumsLink.Tooltip.OverlayTrigger {",
	"			border-radius: 15px;",
	"		}",
	"		div.discussionListItem.unread {",
	"			border-radius: 10px;",
	"		}",
	"		h3.nodeTitle {",
	"			color: #ffffff!important;",
	"		}",
	"		span.unread {",
	"			color: #fff;",
	"		}",
	"		div.header {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		a.button.block {",
	"			border-radius: 15px;",
	"		}",
	"		div.mainProfileColumn {",
	"			border-radius: 15px 15px 15px 15px;",
	"		}",
	"		a.OverlayTrigger.followContainer.button.red.full {",
	"			border-radius: 15px;",
	"		}",
	"		a.crumb {",
	"			color: #F54E50!important;",
	"		}",
	"		div.titleBar h1 {",
	"			color: #fff;",
	"		}",
	"		b.hiddenNarrowUnder.accountUsername.muted {",
	"			color: #eee;",
	"		}",
	"		ul.secondaryContent.blockLinksList li a {",
	"			color: #fff;",
	"			margin-left: 32px;",
	"		}",
	"		a.button.primary.full.callToAction {",
	"			border-radius: 15px;",
	"			background: linear-gradient(0deg, #F54E50, #D84D4F);",
	"			box-shadow: 0 2px 18px 2px rgba(255, 54, 71, .3);",
	"			margin-top: 5px!important;",
	"			margin-left: -3px;",
	"			width: 205px;",
	"		}",
	"		a.mn-15-0-0.button.primary.block {",
	"			background: linear-gradient(0deg, #4c5263, #6e6f73);",
	"		}",
	"		span.numberStyle {",
	"			color: #F54E50;",
	"		}",
	"		span.mainc {",
	"			color: #F54E50;",
	"		}",
	"		div.pageNavLinkGroup {",
	"			background-color: rgba(30, 31, 36, 0.75);",
	"	    backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.messageUserInfo {",
	"			background-color: rgba(30, 31, 36, 0.3);",
	"		}",
	"		a.currentPage {",
	"			background-color: #F54E50!important;",
	"		}",
	"		abbr.DateTime {",
	"			color: #F54E50;",
	"		}",
	"		p.muted a {",
	"			color: #F54E50;",
	"		}",
	"		a.item.hashPermalink.OverlayTrigger.Tooltip {",
	"			color: #898989;",
	"		}",
	"		html.Public.LoggedIn.NoSidebar.Responsive.hasJs.NoTouch.HasDragDrop body, body {",
	"		background: url(https://i.imgur.com/IvuvLDi.jpg) no-repeat;",
	"	background-attachment: fixed;",
	"	    background-size: cover;",
	"		}",
	"		div.module.clear.people_module {",
	"			border-radius: 15px;",
	"		}",
	"		div.redactor_box.activated {",
	"			background-color: #1e1f24;",
	"			color: #1e1f24;",
	"		}",
	"		li.comment.secondaryContent {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.count {",
	"			color: #F54E50!important;",
	"		}",
	"		div.label.muted {",
	"			color: #fff;",
	"		}",
	"		span.DateTime {",
	"			color: #fff;",
	"		}",
	"		div.labeled {",
	"			color: #fff;",
	"			font-size: 14px;",
	"		}",
	"		div.labeled a {",
	"			color: #fff;",
	"		}",
	"		div.itemCount {",
	"			background-color: #F54E50!important;",
	"		}",
	"		h3.nodeTitle a {",
	"			border-radius: 15px!important;",
	"			color: #a3a3a3!important;",
	"		}",
	"		div.sidebarWrapper {",
	"			border-radius: 25px;",
	"		}",
	"		div.secondaryContent {",
	"			border-style: none;",
	"		}",
	"		input.textCtrl.QuickSearchQuery {",
	"			background-color: #23242b!important;",
	"		}",
	"		span.img.s {",
	"			border-style: solid;",
	"			border-color: #1e1f24;",
	"		}",
	"		span.forumSearchThreads--Link--Icon {",
	"			background-color: #F54E50!important;",
	"		}",
	"		div.scrollBar {",
	"			background-color: #1e1f24;",
	"		}",
	"		a.OverlayTrigger.item.control.report {",
	"			color: #fff;",
	"		}",
	"		div.darkBackground.section {",
	"			border-radius: 15px;",
	"		}",
	"		div.topblock.darkBackground.padding15 {",
	"			border-radius: 15px;",
	"			background-color: rgba(30, 31, 36, 0.75);",
	"	    backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.mainContentBlock.section.sectionMain.insideSidebar {",
	"			background-color: #1e1f24;",
	"		}",
	"		a.selected {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.navigationSideBar.ToggleTriggerAnchor ul a {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.navigationSideBar.ToggleTriggerAnchor ul {",
	"			background-color: #1e1f24;",
	"		}",
	"		a.button.primary.OverlayTrigger {",
	"			background-color: #F54E50;",
	"			border-radius: 15px!important;",
	"		}",
	"		h3.textHeading {",
	"			color: #F54E50!important;",
	"		}",
	"		div.textHeading {",
	"			color: #F54E50;",
	"		}",
	"		div.messageMeta.ToggleTriggerAnchor {",
	"			background-color: none !important;",
	"		}",
	"		div.footnote.sectionMain {",
	"			background-color: #1e1f24;",
	"		}",
	"		ol.listInline.commaImplode.sectionMain {",
	"			background-color: #1e1f24;",
	"		}",
	"		a.page_counter {",
	"			padding-right: 10px;",
	"			padding-left: 10px;",
	"		}",
	"		span.page_counter {",
	"			padding-right: 10px;",
	"			padding-left: 10px;",
	"		}",
	"		a.actionButton--sendMoney.fl_r.withLeftButton.OverlayTrigger {",
	"			border-radius: 15px;",
	"			background-color: #F54E50;",
	"		}",
	"		a.CommentLoader {",
	"			color: #F54E50;",
	"		}",
	"		div.chatboxStartIcon.Tooltip.icon {",
	"			color: #F54E50;",
	"		}",
	"		img.size23 {",
	"			border-style: none;",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size2 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size21 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size60 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size22 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size139 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		em.userBanner.Bezdarnost.wrapped {",
	"			border-radius: 0 5px 0 5px;",
	"		}",
	"		img.size127 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size11 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		img.size26 {",
	"			border-radius: 0 30px 0 30px;",
	"		}",
	"		#lzt-logo {",
	"			background-size: 100%;",
	"			background: url(https://i.imgur.com/zcGMiLD.png) no-repeat;",
	"		}",
	"		input.ChatboxInput.message.textCtrl.extraLarge {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.chatboxWrapper {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.ChatboxScrollbar.scrollbar-macosx.scrollbar-dynamic.cannotBanUser.scroll-content.scroll-scrolly_visible ol {",
	"			background-color: #1e1f24;",
	"		}",
	"		span.closeChatboxButton.icon.element.fl_r {",
	"			color: #ffffff!important;",
	"		}",
	"		div.primaryControls:before {",
	"			color: #F54E50!important;",
	"		}",
	"		button.button.primary.bbCodeSpoilerButton.ToggleTrigger.Tooltip.JsOnly {",
	"			background-color: #594896;",
	"			border-radius: 10px;",
	"		}",
	"		li.messageSimple {",
	"			background: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"			border-radius: 15px;",
	"		}",
	"		form.simpleRedactor.MemberViewRedactor.messageSimple.profilePoster.AutoValidator.primaryContent {",
	"			background: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"			border-radius: 0 0 15px 15px;",
	"		}",
	"		div.darkBackground {",
	"			background-color: hsla(230, 9%, 13%, 0.75);",
	"			border-radius: 15px;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		a.dottesStyle.buttonStyle.PopupControl.PopupClosed {",
	"			border-radius: 15px;",
	"		}",
	"		a.Av981224l.OverlayTrigger img {",
	"			border-radius: 0 10px;",
	"		}",
	"		div.avatarScaler span img {",
	"			border-radius: 0 10px;",
	"		}",
	"		span.style21 {",
	"			font-size: 14px;",
	"		}",
	"		div.label.fl_l {",
	"			font-size: 14px;",
	"		}",
	"		div.clear_fix.profile_info_row {",
	"			font-size: 14px;",
	"			padding-top: 6px;",
	"		}",
	"		a.actionButton--sendMoney.fl_r.OverlayTrigger.Tooltip {",
	"			background-color: #F54E50;",
	"		}",
	"		li.primaryContent {",
	"			background-color: #1e1f24;",
	"		}",
	"		h2.textHeading {",
	"			color: #F54E50;",
	"		}",
	"		.tabs li.active {",
	"			box-shadow: inset 0 -2px 0 0 rgb(223, 60, 66);",
	"		}",
	"		div.counts_module {",
	"			border-radius: 25px;",
	"		}",
	"		ul.tabs.mainTabs.Tabs {",
	"			background: rgba(30, 31, 36, 0.75)!important;",
	"			backdrop-filter: blur(12px) !important;",
	"			border-radius: 15px 15px 0 0;",
	"		}",
	"		li.profileContent {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.not-found-block {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.sectionMain {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.primaryContent {",
	"			background-color: #1e1f24;",
	"		}",
	"		th.warningView {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		th.warningExpiry {",
	"			background-color: #1e1f24!important;",
	"			color: #F54E50!important;",
	"		}",
	"		th.warningPoints {",
	"			background-color: #1e1f24!important;",
	"			color: #F54E50!important;",
	"		}",
	"		th.warningDate {",
	"			background-color: #1e1f24!important;",
	"			color: #F54E50!important;",
	"		}",
	"		th.warningName {",
	"			background-color: #1e1f24!important;",
	"			color: #F54E50!important;",
	"		}",
	"		.node.current .nodeText .nodeTitle a::before {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		div.pageWidth.withSearch {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		h2.heading.h1 {",
	"			background-color: #F54E50!important;",
	"		}",
	"		button.button.primary.bbCodeSpoilerButton.ToggleTrigger.JsOnly {",
	"			background-color: #F54E50;",
	"		}",
	"		#pageDescription>a,",
	"		#pageDescription>a>abbr {",
	"			color: rgb(223, 60, 66);",
	"		}",
	"		.breadcrumb .crust:last-child a.crumb {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		a.externalLink {",
	"			color: #F54E50!important;",
	"		}",
	"		.current>div>.nodeTitle>a {",
	"			color: rgb(148, 148, 134)!important;",
	"		}",
	"		a.PopupItemLink {",
	"			color: #F54E50!important;",
	"		}",
	"		h3.nodeTitle a {",
	"			color: #d4d4d4!important;",
	"		}",
	"		div.searchBarContainer.searchHistoryContainer.mn-0-0-15 {",
	"			background-color: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.searchBarContainer {",
	"			background-color: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.marketMainContainer {",
	"			background: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.marketExtraSidebarMenu.marketSidebarMenu {",
	"			background-color: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.marketSidebarMenu {",
	"			background-color: none !important;",
	"	    background: rgba(30, 31, 36, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		button.searchButton.button.primary {",
	"			background-color: #F54E50!important;",
	"		}",
	"		a.currentPage {",
	"			background-color: #F54E50!important;",
	"		}",
	"		div.trimmedTitle a {",
	"			color: #F54E50!important;",
	"		}",
	"		span.balanceNumber {",
	"			color: #F54E50!important;",
	"		}",
	"		span.priceBadge {",
	"			background-color: #F54E50!important;",
	"		}",
	"		h4.mn-30-0-0.mn-0-0-15 {",
	"			color: #F54E50!important;",
	"		}",
	"		h4.title.mn-0-0-15 {",
	"			color: #F54E50!important;",
	"		}",
	"		a.hiddenNarrowUnder {",
	"			color: #F54E50!important;",
	"		}",
	"		.navTabs .navTab.account.PopupOpen .accountUsername {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		.navTabs .navTab.account:hover .accountUsername {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		a.item.control.edit.OverlayTrigger {",
	"			color: #F54E50!important;",
	"		}",
	"		a.button.primary {",
	"			background-color: #F54E50!important;",
	"		}",
	"		input[type=\"checkbox\"]:checked:after {",
	"			background-color: rgb(223, 60, 66)!important;",
	"			border-color: rgb(223, 60, 66)!important;",
	"		}",
	"		li.not-found-block {",
	"			background-color: #1e1f24!important;",
	"			color: #F54E50!important;",
	"		}",
	"		i.fa.fa-newspaper-o.not-found-icon {",
	"			color: #F54E50!important;",
	"		}",
	"		div.not-found-block {",
	"			color: #F54E50!important;",
	"		}",
	"		div.titleBar {",
	"			border-radius: 15px 15px 0 0;",
	"		}",
	"		div.pageContent {",
	"			border-radius: 15px;",
	"		}",
	"		h3.title a {",
	"			color: #F54E50!important;",
	"		}",
	"		div.Menu.JsOnly {",
	"			background-color: #1e1f24!important;",
	"			border-radius: 15px;",
	"		}",
	"		#lzt-market-logo {",
	"			background: url(https://i.imgur.com/Jr61kY5.png) no-repeat center!important;",
	"		}",
	"		.marketIndexItem.sticky .marketIndexItem--Price {",
	"			background: rgb(223, 60, 66)!important;",
	"		}",
	"		div.secondaryContent h3 {",
	"			color: #ffffff!important;",
	"		}",
	"		div.secondaryContent h3 a {",
	"			color: #ffffff!important;",
	"		}",
	"		div.searchHistory--heading {",
	"			color: #ffffff!important;",
	"		}",
	"		h2.heading.overlayOnly {",
	"			background-color: #F54E50!important;",
	"		}",
	"		.button.primary {",
	"			background-color: rgb(223, 60, 66)!important;",
	"		}",
	"		.mainc {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		.conversationItem .messageStateIcon {",
	"			color: rgb(223, 60, 66)!important;",
	"		}",
	"		.navPopup .listPlaceholder::-webkit-scrollbar-thumb,",
	"		.brmsTabContent::-webkit-scrollbar-thumb {",
	"			background: rgb(223, 60, 66)!important;",
	"			border-radius: 3px;",
	"		}",
	"		.backToHomeButton {",
	"			background: rgb(223, 60, 66)!important;",
	"		}",
	"		span.stat.extendedGuarantee.Tooltip {",
	"			color: #ffffff!important;",
	"		}",
	"		.button.primary:hover {",
	"			background: rgb(146, 29, 32) radial-gradient(circle, transparent 1%, rgb(146, 29, 32) 1%) center/15000%!important;",
	"		}",
	"		#navigation>div.pageContent>nav>div>div>ul>li.navTab.alerts.Popup.PopupControl.PopupContainerControl.PopupOpen>a>div>img:hover {",
	"			content: url(https://i.imgur.com/dkpXgem.png);",
	"		}",
	"		.navigationSideBar a.selected {",
	"			box-shadow: inset 4px 0 0 0 rgba(223, 60, 66, 1)!important;",
	"		}",
	"		.node .nodeText .nodeTitle a::before {",
	"			color: rgb(244, 244, 244)!important;",
	"		}",
	"		input[type=\"radio\"]:before {",
	"			background: rgb(223, 60, 66)!important;",
	"		}",
	"		div.conversationMessages.scrollbar-macosx.scrollbar-dynamic.scroll-content.scroll-scrolly_visible ol {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.TypingNotice.typingNotice {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		input.universalSearchInput.textCtrl {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		li.conversationItem._loadConversation {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.conversationList--bottomBar--Wrap {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.membersAndActions {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.scroll-bar {",
	"			background-color: #F54E50!important;",
	"		}",
	"		span.conversationList--bottomBar--Mode.button.ModChanger.ShowUnread.visible {",
	"			background-color: #4c5263!important;",
	"		}",
	"		a.FollowLink.followButton.button.block {",
	"			background-color: #4c5263!important;",
	"		}",
	"		a.dottesStyle.buttonStyle.PopupControl.PopupOpen {",
	"			background-color: #313640!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		.dottesStyle.buttonStyle {",
	"			background-color: rgb(49, 53, 64)!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		.dottesStyle {",
	"			background: url(https://i.imgur.com/hcEO9Qm.png) no-repeat center;",
	"		}",
	"		div.Menu {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.primaryContent {",
	"			border-radius: 0 0 15px 15px!important;",
	"		}",
	"		div.sectionMain.quickWrite {",
	"			border-radius: 15px!important;",
	"		}",
	"		a.button.mn-15-0-0 {",
	"			background-color: #4c5263!important;",
	"			color: #ffffff!important;",
	"		}",
	"		span.unread {",
	"			color: #ffffff!important;",
	"		}",
	"		div.titleBar {",
	"			background-color: rgba(38, 41, 48, 0.75)!important;",
	"	backdrop-filter: blur(12px) !important;",
	"		}",
	"		.message .item.unlike>.icon {",
	"			background-image: url(https://i.imgur.com/x9udpDU.png)!important;",
	"		}",
	"		a.internalLink {",
	"			color: #F54E50!important;",
	"		}",
	"		div.conversationMessages.scrollbar-macosx.scrollbar-dynamic.scroll-content {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.messageWrapper {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.homeBannersAds1 {",
	"			display: none !important;",
	"		}",
	"	.navigationImage {",
	"			display: none !important;",
	"		}",
	"		span.title.bold {",
	"			display: none;",
	"		}",
	"		a.discussionListItem.item {",
	"			display: none!important;",
	"		}",
	"		.bbCodeHide.bbCodeQuote {",
	"			border: 3px solid rgb(76, 82, 99)!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		div.attribution.type {",
	"			background-color: #4c5263!important;",
	"		}",
	"		div.header {",
	"			border-radius: 10px 10px 0 0!important;",
	"		}",
	"		.PageNav a {",
	"			border-radius: 5px!important;",
	"		}",
	"		a.cd-top.cd-is-visible {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.PageNav.fixed nav {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		html {",
	"			background-color: rgb(30, 31, 36)!important;",
	"		}",
	"		.scrollBar::-webkit-scrollbar-thumb,",
	"		.chosen-results::-webkit-scrollbar-thumb {",
	"			background: rgb(245, 78, 80)!important;",
	"			border-radius: 5px!important;",
	"		}",
	"		.Menu {",
	"			box-shadow: 0 12px 25px rgba(255, 54, 71, .3)!important;",
	"		}",
	"		li.message {",
	"			background-color: hsla(230, 9%, 13%, 0.75)!important;",
	"	    backdrop-filter: blur(12px) !important;",
	"		}",
	"		input.textCtrl:focus,",
	"		select.textCtrl:focus {",
	"			box-shadow: 0 0 .5px 1px rgb(223, 60, 66)!important;",
	"		}",
	"		button.searchButton {",
	"			background-color: #1e1f24!important;",
	"		}",
	"		div.PanelScroller.Notices {",
	"			display: none!important;",
	"		}",
	"		div.messageMeta.ToggleTriggerAnchor {",
	"			border-radius: 10px!important;",
	"		}",
	"		div.messageUserInfo {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.redactor_box.focused.activated {",
	"			border-radius: 15px!important;",
	"		}",
	"		div.redactor_box.activated {",
	"			box-shadow: 0 0 .5px 2px rgb(190, 58, 54)!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		input.button.primary {",
	"			border-radius: 15px!important;",
	"			background-color: #F54E50!important;",
	"		}",
	"		li.message.message-block {",
	"			border-radius: 15px !important;",
	"		}",
	"		.bbCodeQuote {",
	"			border-left: 5px solid rgb(190, 66, 64)!important;",
	"		}",
	"		a.close.OverlayCloser {",
	"			color: #ffffff!important;",
	"		}",
	"		.conversationItem.active .avatar.isOnline::before {",
	"			border: 3px solid #3f3563!important;",
	"		}",
	"		.conversationItem .avatar.isOnline::before {",
	"			background-color: rgb(223, 60, 66)!important;",
	"		}",
	"		.forum_list,",
	"		.forum_view {",
	"			background: rgb(24, 25, 30, 0.75) !important;",
	"	                backdrop-filter: blur(12px) !important;",
	"		}",
	"		div.alertNotice.mn-0-0-15 {",
	"			background-color: #18191e!important;",
	"		}",
	"		#searchBar {",
	"			margin: 8px 0px!important;",
	"		}",
	"		li.not-found-block {",
	"			background-color: #ffffff!important;",
	"		}",
	"		form.secondaryContent.findMember {",
	"			background-color: #1e1f24!important;",
	"		}",
	"	.quickReply {",
	"	    background: rgba(30, 31, 36, 0.75) !important;",
	"	    backdrop-filter: blur(12px) !important;",
	"	}",
	"		ul.tabs {",
	"			background-color: #1e1f24;",
	"		}",
	"		div.errorPanel {",
	"			background-color: #1e1f24!important;",
	"			border-radius: 15px!important;",
	"		}",
	"		input.button.JsOnly {",
	"			border-radius: 15px!important;",
	"		}",
	"		input.button.OverlayCloser {",
	"			border-radius: 15px!important;",
	"		}",
	"		input.textCtrl.OptOut {",
	"			background-color: #18191e!important;",
	"			border-radius: 10px!important;",
	"		}",
	"		input.textCtrl {",
	"			background-color: #18191e!important;",
	"			border-radius: 10px!important;",
	"		}",
	"		textarea.textCtrl.Elastic {",
	"			background-color: #18191e!important;",
	"			border-radius: 10px!important;",
	"		}",
	"		div.textCtrl {",
	"			background-color: #18191e!important;",
	"			border-radius: 10px!important;",
	"		}",
	"		select.textCtrl.autoSize {",
	"			border-radius: 10px!important;",
	"			background-color: #18191e!important;",
	"		}",
	"		div.heading {",
	"			color: #ffffff!important;",
	"		}",
	"		span.button.primary.OverlayTrigger {",
	"			border-radius: 15px!important;",
	"			box-shadow: 0 2px 18px 2px rgba(223, 60, 66, .4)!important;",
	"		}",
	"		span.redactor_modal_btn.button.primary {",
	"			border-radius: 15px!important;",
	"			box-shadow: 0 2px 18px 2px rgba(223, 60, 66, .4)!important;",
	"		}",
	"		a.redactor_modal_btn.redactor_btn_modal_close.button {",
	"			background-color: #4c5263!important;",
	"			border-radius: 15px!important;",
	"			box-shadow: 0 2px 18px 2px rgba(76, 82, 99, .5)!important;",
	"		}",
	"		form.formOverlay.xenForm {",
	"			border-radius: 15px!important;",
	"			background-color: #1e1f24!important;",
	"			box-shadow: 0 2px 18px 2px rgba(223, 60, 66, .1)!important;",
	"		}",
	"		div.welcomeMessage.mn-15-0 {",
	"			border-radius: 15px;",
	"		}",
	"		.forum_list .discussionList {",
	"			margin-top: -5px !important;",
	"			border-radius: 0 15px 15px 0 !important;",
	"	box-shadow: 10px 0px 17px -7px rgba(76, 82, 99, 0.4);",
	"		}",
	"		.sidebarWrapper {",
	"			margin-bottom: 15px!important;",
	"		}",
	"		.aboveThreadList {",
	"			padding-top: 20px!important;",
	"		}",
	"		::-webkit-scrollbar {",
	"			width: 12px;",
	"		}",
	"		::-webkit-scrollbar:horizontal {",
	"			height: 12px;",
	"		}",
	"		::-webkit-scrollbar-button {",
	"			background: #18191e;",
	"		}",
	"		::-webkit-scrollbar-track {",
	"			background: #18191e;",
	"		}",
	"		::-webkit-scrollbar-track-piece {",
	"			background: #1e1f24;",
	"		}",
	"		::-webkit-scrollbar-thumb {",
	"			background: #35363e;",
	"			border-radius: 10px;",
	"		}",
	"		.button {",
	"			border-radius: 15px !important;",
	"		}",
	"		.dottesStyle.buttonStyle {",
	"			margin-left: none !important;",
	"		}",
	"	        .monthMaecenas--quote {",
	"	background: none !important;",
	"	border: 1px solid darkred;",
	"	}",
	"	.monthMaecenas--quote::before {",
	"	    border-color: transparent transparent darkred !important;",
	"	}",
	"	.privateControls .item.control {",
	"	color: #F54E50 !important;",
	"	}",
	"	.page_counter .count {",
	"	    box-shadow: 1px 55px 30px rgba(207,50,54, 0.4) !important;",
	"	    text-shadow: 1px 4px 8px rgba(207,50,0, 0.4) !important;",
	"	}",
	"	div.memberViewTrophies ol {",
	"	    border: 1px solid #2d2d2d !important;",
	"	    border-radius: 15px !important;",
	"	    padding: 5px !important;",
	"	    margin-bottom: 10px !important;",
	"	}",
	"	li.not-found-block {",
	"	    background-color: #18191e !important;",
	"	}",
	"	.stickyThreads {",
	"	    border-left: none !important;",
	"	    border-right: none !important;",
	"	    border-radius: 20px !important;",
	"	    border-bottom: 1.4px solid #F54E50 !important;",
	"	    border-top: 1.4px solid #F54E50 !important;",
	"	    margin: 15px !important;",
	"	    margin-bottom: 25px !important;",
	"	    margin-top: 25px !important;",
	"	    padding-left: 35px !important;",
	"	    padding-right: 35px !important;",
	"	    padding-top: 10px !important;",
	"	    padding-bottom: 10px !important;",
	"	}",
	"	.discussionList .universalSearchForm {",
	"	    border-radius: 15px !important;",
	"	}",
	"	.bbCodeSpoilerText .bbCodeSpoilerContainer:first-child::before {",
	"	    border-left: 6px solid #F54E50 !important;",
	"	    border-bottom: 6px solid #F54E50 !important;",
	"	    border-radius: 7px !important;",
	"	}",
	"	.blockrow {",
	"	   background: #1e1f24 !important;",
	"	}",
	"	.dataTable tr.dataRow th {",
	"	    background: #1e1f24 !important;",
	"	    color: #F54E50 !important;",
	"	}",
	"	.bbCode > dl > dt {",
	"	    color: #F54E50 !important;",
	"	}",
	"	div.label.fl_l {",
	"	    font-size: 13.5px !important;",
	"	}",
	"	span.DateTime {",
	"	    font-size: 13.5px !important;",
	"	}",
	"	div.labeled {",
	"	    font-size: 13.5px !important;",
	"	}",
	"	.likeContainer {",
	"	    background-color: #1e1f24;",
	"	}",
	"	.likeNodes {",
	"	    background-color: #1e1f24;",
	"	}",
	"	.likeNodes .node .counter {",
	"	    color: #F54E50!important;",
	"	    text-shadow: 1px 4px 8px rgba(207,50,0, 0.4) !important;",
	"	}",
	"	.member_view .errorPanel {",
	"	    border-left: none !important;",
	"	    border-right: none !important;",
	"	    border: 1px solid #F54E50;",
	"	}",
	"	.navTabs .navTab.account .navLink .accountUsername {",
	"		background: linear-gradient(130deg, #a67ce0, #c785df, #ed9be1, #f4c1e0, #ead6e2, #b2e5ec, #92aafb, #96a0fa, #a680e3);",
	"		-webkit-background-clip: text;",
	"		-webkit-text-fill-color: transparent;",
	"		text-shadow: 0 0 8px #a287e87a;",
	"	}",
	"	.message .messageInfo .onlineMarker {",
	"		background: rgb(223, 60, 66);",
	"	}",
	"	.discussionListItem .userOnlineIndicator {",
	"		background: rgb(223, 60, 66);",
	"	}",
	"	.marketSidebarMenu a.selected{",
	"	    box-shadow: inset 2.5px 0 0 0 rgb(255,0,48);",
	"	}",
	"	element.style{",
	"		background-color: #1e1f24;",
	"	}",
	"	#completeChatbox .controls.reversedDirection{",
	"		background-color: #1e1f24;",
	"	}",
	"	.chatboxWidget .scroll-wrapper {",
	"		background-color: #1e1f24;",
	"	}",
	"	#chatbox {",
	"		max-height: 600px !important;",
	"		padding: 10px !important;",
	"		overflow: auto;",
	"		overflow-y: scroll;",
	"		background: #1e1f24;",
	"	}"
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
