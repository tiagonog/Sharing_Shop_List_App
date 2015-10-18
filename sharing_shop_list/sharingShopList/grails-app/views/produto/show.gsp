
<%@ page import="sharingshoplist.Produto" %>
<!DOCTYPE html>
<html>
	<head>
		<meta name="layout" content="main">
		<g:set var="entityName" value="${message(code: 'produto.label', default: 'Produto')}" />
		<title><g:message code="default.show.label" args="[entityName]" /></title>
	</head>
	<body>
		<a href="#show-produto" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
		<div class="nav" role="navigation">
			<ul>
				<li><a class="home" href="${createLink(uri: '/')}"><g:message code="default.home.label"/></a></li>
				<li><g:link class="list" action="index"><g:message code="default.list.label" args="[entityName]" /></g:link></li>
				<li><g:link class="create" action="create"><g:message code="default.new.label" args="[entityName]" /></g:link></li>
			</ul>
		</div>
		<div id="show-produto" class="content scaffold-show" role="main">
			<h1><g:message code="default.show.label" args="[entityName]" /></h1>
			<g:if test="${flash.message}">
			<div class="message" role="status">${flash.message}</div>
			</g:if>
			<ol class="property-list produto">

				<g:if test="${produtoInstance?.nome}">
				<li class="fieldcontain">
					<span id="nome-label" class="property-label"><g:message code="produto.nome.label" default="Nome" /></span>

						<span class="property-value" aria-labelledby="nome-label"><g:fieldValue bean="${produtoInstance}" field="nome"/></span>

				</li>
				</g:if>

				<g:if test="${produtoInstance?.preco}">
				<li class="fieldcontain">
					<span id="preco-label" class="property-label"><g:message code="produto.preco.label" default="Preco" /></span>

						<span class="property-value" aria-labelledby="preco-label"><g:fieldValue bean="${produtoInstance}" field="preco"/></span>

				</li>
				</g:if>

				<g:if test="${produtoInstance?.marca}">
				<li class="fieldcontain">
					<span id="marca-label" class="property-label"><g:message code="produto.marca.label" default="Marca" /></span>

						<span class="property-value" aria-labelledby="marca-label"><g:fieldValue bean="${produtoInstance}" field="marca"/></span>

				</li>
				</g:if>

				<g:if test="${produtoInstance?.categoria}">
				<li class="fieldcontain">
					<span id="categoria-label" class="property-label"><g:message code="produto.categoria.label" default="Categoria" /></span>

						<span class="property-value" aria-labelledby="categoria-label"><g:fieldValue bean="${produtoInstance}" field="categoria"/></span>

				</li>
				</g:if>

				<g:if test="${produtoInstance?.regiao}">
				<li class="fieldcontain">
					<span id="regiao-label" class="property-label"><g:message code="produto.regiao.label" default="Regiao" /></span>

						<span class="property-value" aria-labelledby="regiao-label"><g:fieldValue bean="${produtoInstance}" field="regiao"/></span>

				</li>
				</g:if>

				<g:if test="${produtoInstance?.status}">
				<li class="fieldcontain">
					<span id="status-label" class="property-label"><g:message code="produto.status.label" default="Status" /></span>

						<span class="property-value" aria-labelledby="status-label"><g:fieldValue bean="${produtoInstance}" field="status"/></span>

				</li>
				</g:if>

			</ol>
			<g:form url="[resource:produtoInstance, action:'delete']" method="DELETE">
				<fieldset class="buttons">
					<g:link class="edit" action="edit" resource="${produtoInstance}"><g:message code="default.produto.edit.label" default="Edit" /></g:link>
					<g:actionSubmit class="delete" action="delete" value="${message(code: 'default.produto.delete.label', default: 'Delete')}" onclick="return confirm('${message(code: 'default.button.delete.confirm.message', default: 'Are you sure?')}');" />
				</fieldset>
			</g:form>
		</div>
	</body>
</html>
