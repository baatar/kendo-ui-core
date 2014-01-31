(function(f, define){
    define([
        "./kendo.core",
        "./kendo.router",
        "./kendo.touch",
        "./kendo.view",
        "./kendo.fx",
        "./kendo.data.odata",
        "./kendo.data.xml",
        "./kendo.data",
        "./kendo.data.signalr",
        "./kendo.binder",
        "./kendo.validator",
        "./kendo.userevents",
        "./kendo.draganddrop",
        "./kendo.mobile.scroller",
        "./kendo.resizable",
        "./kendo.sortable",
        "./kendo.selectable",
        "./kendo.button",
        "./kendo.pager",
        "./kendo.popup",
        "./kendo.notification",
        "./kendo.tooltip",
        "./kendo.list",
        "./kendo.calendar",
        "./kendo.datepicker",
        "./kendo.autocomplete",
        "./kendo.dropdownlist",
        "./kendo.combobox",
        "./kendo.multiselect",
        "./kendo.colorpicker",
        "./kendo.listview",
        "./kendo.numerictextbox",
        "./kendo.menu",
        "./kendo.editable",
        "./kendo.panelbar",
        "./kendo.progressbar",
        "./kendo.tabstrip",
        "./kendo.timepicker",
        "./kendo.datetimepicker",
        "./kendo.slider",
        "./kendo.splitter",
        "./kendo.window"
    ], f);
})(function(){
    "bundle all";
}, typeof define == 'function' && define.amd ? define : function(_, f){ f(); });