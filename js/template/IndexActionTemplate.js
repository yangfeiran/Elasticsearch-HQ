var indexActionTemplate = {};

indexActionTemplate.createIndex = [
    '<div class="span8 center-table">',

    '<form class="form-horizontal" id="createIndexForm">',
    '<fieldset>',
    '<div id="legend">',
    '<legend class="">创建一个索引</legend>',
    '</div>',
    '<div class="control-group">',
    '<label class="control-label"  for="indexId">索引ID</label>',
    '<div class="controls">',
    '<input type="text" id="indexId" name="indexId" placeholder="" class="input-xlarge"  data-error-style="inline">',
    '</div>',
    '</div>',

    '<div class="control-group">',
    '<label class="control-label" for="shards"># Shards</label>',
    '<div class="controls">',
    '<input type="text" id="shards" name="shards" placeholder="" class="input-mini"  data-error-style="inline">',
    '</div>',
    '</div>',
    '<div class="control-group">',
    '<label class="control-label" for="replicas"># Replicas</label>',
    '<div class="controls">',
    '<input type="text" id="replicas" name="replicas" placeholder="" class="input-mini"  data-error-style="inline">',
    '</div>',
    '</div>',

    '<div class="control-group">',
    '<div class="controls">',
    '<button type="submit" id="createIndexSubmit" class="btn btn-success">Create</button>',
    '<a href="#indices" class="btn">Cancel</a>',
    '</div>',
    '</div>',
    '</fieldset>',
    '</form>',

    '</div>'
].join("\n");

indexActionTemplate.defaultModal = [
    '<div class="modal hide fade" id="defaultindexmodal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>',
    '<h3><%- title %></h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>服务器返回... </p>',
    '<pre class="prettyprint linenums language-json">',
    '<%- res %>',
    '</pre>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" class="btn" data-dismiss="modal">Close</a>',
    '</div>',
    '</div>'
].join("\n");

indexActionTemplate.optimizeAll = [
    '<div class="modal hide fade" id="optimizeallmodal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>',
    '<h3>索引优化</h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>服务器返回... </p>',
    '<pre class="prettyprint linenums language-json">',
    '<%- res %>',
    '</pre>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" class="btn" data-dismiss="modal">Close</a>',
    '</div>',
    '</div>'
].join("\n");

indexActionTemplate.flushAll = [
    '<div class="modal hide fade" id="flushallmodal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>',
    '<h3>索引强制写入</h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>服务器返回... </p>',
    '<pre class="prettyprint linenums language-json">',
    '<%- res %>',
    '</pre>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" class="btn" data-dismiss="modal">Close</a>',
    '</div>',
    '</div>'
].join("\n");

indexActionTemplate.clearCacheAll = [
    '<div class="modal hide fade" id="clearcacheallmodal">',
    '<div class="modal-header">',
    '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>',
    '<h3>索引缓存清空</h3>',
    '</div>',
    '<div class="modal-body">',
    '<p>服务器返回... </p>',
    '<pre class="prettyprint linenums language-json">',
    '<%- res %>',
    '</pre>',
    '</div>',
    '<div class="modal-footer">',
    '<a href="#" class="btn" data-dismiss="modal">Close</a>',
    '</div>',
    '</div>'
].join("\n");

indexActionTemplate.createAlias = [
    '<div class="span8 center-table">',

    '<form class="form-horizontal" id="createAliasForm">',
    '<input type="hidden" name="indexId" value="<%- indexId %>">',
    '<fieldset>',
    '<div id="legend">',
    '<legend class="">为此索引创建一个别名 "<%- indexName %>"</legend>',
    '</div>',
    '<div class="control-group">',
    '<label class="control-label"  for="aliasId">别名ID</label>',
    '<div class="controls">',
    '<input type="text" id="aliasId" name="aliasId" placeholder="" class="input-xlarge"  data-error-style="inline">',
    '</div>',
    '</div>',

    '<div class="control-group">',
    '<label class="control-label" for="index_routing">索引路由</label>',
    '<div class="controls">',
    '<input type="text" id="index_routing" name="index_routing" placeholder="" class="input-mini"  data-error-style="inline">',
    '</div>',
    '</div>',
    '<div class="control-group">',
    '<label class="control-label" for="search_routing">搜索路由</label>',
    '<div class="controls">',
    '<input type="text" id="search_routing" name="search_routing" placeholder="" class="input-mini"  data-error-style="inline">',
    '</div>',
    '</div>',

    '<div class="control-group">',
    '<div class="controls">',
    '<button type="submit" id="createAliasSubmit" class="btn btn-success">Create</button>',
    '<a href="#index/<%- indexId %>" class="btn">Cancel</a>',
    '</div>',
    '</div>',
    '</fieldset>',
    '</form>',

    '</div>'
].join("\n");