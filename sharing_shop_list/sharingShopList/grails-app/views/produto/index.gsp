
<%@ page import="sharingshoplist.Produto" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'produto.label', default: 'Produto')}" />
		<title><g:message code="default.list.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#list-produto" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="create" action="create"><g:message code="produto.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="list-produto" class="content scaffold-list" role="main">
			<h1><g:message code="default.produto.list" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
				<div class="message" role="status">${flash.message}</div>
			</g:if>
			<table>
			<thead>
					<tr>

						<g:sortableColumn property="nome" title="${message(code: 'produto.nome.label', default: 'Nome')}" />

						<g:sortableColumn property="preco" title="${message(code: 'produto.preco.label', default: 'Preço')}" />

						<g:sortableColumn property="marca" title="${message(code: 'produto.marca.label', default: 'Marca')}" />

						<g:sortableColumn property="categoria" title="${message(code: 'produto.categoria.label', default: 'Categoria')}" />

						<g:sortableColumn property="regiao" title="${message(code: 'produto.regiao.label', default: 'Regiao')}" />

						<g:sortableColumn property="status" title="${message(code: 'produto.status.label', default: 'Status')}" />

					</tr>
				</thead>
				<tbody>
				<g:each in="${produtoInstanceList}" status="i" var="produtoInstance">
					<tr class="${(i % 2) == 0 ? 'even' : 'odd'}">

						<td><g:link action="show" id="${produtoInstance.id}">${fieldValue(bean: produtoInstance, field: "nome")}</g:link></td>

						<td>${fieldValue(bean: produtoInstance, field: "preco")}</td>

						<td>${fieldValue(bean: produtoInstance, field: "marca")}</td>

						<td>${fieldValue(bean: produtoInstance, field: "categoria")}</td>

						<td>${fieldValue(bean: produtoInstance, field: "regiao")}</td>

						<td>${fieldValue(bean: produtoInstance, field: "status")}</td>

					</tr>
				</g:each>
				</tbody>
			</table>
			<div class="pagination">
				<g:paginate total="${produtoInstanceCount ?: 0}" />
			</div>
		</div>
	</body>
</html>
