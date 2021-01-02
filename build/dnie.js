(function () {
  window.onload = function () {
    var html =
      '<div style="position:fixed;z-index:9999;top:0;right:0;bottom:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.5);filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);">' +
      '<div style="margin:64px auto auto;padding:0 16px 24px;width:600px;border:solid 1px #ddd;background-color:#fff;text-align:center;color:#333;letter-spacing:1px;line-height:1.6em;font-size:14px;">' +
      '<div style="font-size:20px;font-weight:bold;margin-top:32px;">您似乎正在使用IE浏览器</div>' +
      '<div style="font-size:18px;margin-top:16px;">为了保障您的安全，请更换使用以下浏览器</div>' +
      '<div style="margin-top:24px;">' +
      '<div style="width:25%;float:left;text-align:center">' +
      "<div>360 浏览器</div>" +
      '<a href="https://browser.360.cn/" style="display:block;width:4em;padding:4px;margin:8px auto auto;background-color:#e74c3c;color:#fff;text-decoration: none;">下载</a>' +
      "</div>" +
      '<div style="width:25%;float:left;text-align:center">' +
      "<div>Microsoft Edge</div>" +
      '<a href="https://www.microsoft.com/zh-cn/edge/" style="display:block;width:4em;padding:4px;margin:8px auto auto;background-color:#e74c3c;color:#fff;text-decoration: none;">下载</a>' +
      "</div>" +
      '<div style="width:25%;float:left;text-align:center">' +
      "<div>Mozilla Firefox</div>" +
      '<a href="https://www.mozilla.org/zh-CN/firefox/new/" style="display:block;width:4em;padding:4px;margin:8px auto auto;background-color:#e74c3c;color:#fff;text-decoration: none;">下载</a>' +
      "</div>" +
      '<div style="width:25%;float:left;text-align:center">' +
      "<div>Google Chrome</div>" +
      '<a href="https://www.google.cn/chrome/" style="display:block;width:4em;padding:4px;margin:8px auto auto;background-color:#e74c3c;color:#fff;text-decoration: none;">下载</a>' +
      "</div>" +
      '<div style="clear:both;float:none;"></div>' +
      "</div>" +
      '<div style="height:1px;background-color:#ddd;margin-top:32px;font-size:0;"></div>' +
      "<div>" +
      '<div style="font-size:20px;font-weight:bold;margin-top:32px;">如果您正在使用<span style="padding:4px;margin:0 4px;background-color:#2ecc71;color:#fff;">360浏览器</span></div>' +
      '<div style="font-size:18px;margin-top:16px;">请按照以下步骤，以获得更好的体验</div>' +
      "</div>" +
      '<div style="margin-top:24px;font-size:16px;">' +
      '<div style="line-height:2em;">' +
      "<div>1.点击地址栏闪电图标</div>" +
      "<div>2.选择第一项极速模式</div>" +
      "</div>" +
      '<div style="clear:both;float:none;"></div>' +
      "</div>" +
      "</div>" +
      "</div>";
    var body = document.body;
    var dom = document.createElement("div");
    body.appendChild(dom);
    dom.outerHTML = html;
  };
})();
