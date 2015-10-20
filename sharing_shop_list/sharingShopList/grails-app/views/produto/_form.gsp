<%@ page import="sharingshoplist.Produto" %>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'nome', 'error')} required">
	<label for="nome">
		<g:message code="produto.nome.label" default="Nome" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="nome" required="" value="${produtoInstance?.nome}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'preco', 'error')} required">
	<label for="preco">
		<g:message code="produto.preco.label" default="Preço" />
		<span class="required-indicator">*</span>
	</label>
	<g:field name="preco" value="${fieldValue(bean: produtoInstance, field: 'preco')}" required=""/>

</div>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'marca', 'error')} required">
	<label for="marca">
		<g:message code="produto.marca.label" default="Marca" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="marca" required="" value="${produtoInstance?.marca}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'categoria', 'error')} required">
	<label for="categoria">
		<g:message code="produto.categoria.label" default="Categoria" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="categoria" required="" value="${produtoInstance?.categoria}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'regiao', 'error')} required">
	<label for="regiao">
		<g:message code="produto.regiao.label" default="Regiao" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="regiao" required="" value="${produtoInstance?.regiao}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: produtoInstance, field: 'status', 'error')} required">
	<label for="status">
		<g:message code="produto.status.label" default="Status" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="status" required="" value="${produtoInstance?.status}"/>

</div>
