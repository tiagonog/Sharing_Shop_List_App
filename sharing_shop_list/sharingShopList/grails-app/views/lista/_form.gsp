<%@ page import="sharingshoplist.Lista" %>



<div class="fieldcontain ${hasErrors(bean: listaInstance, field: 'name', 'error')} required">
	<label for="name">
		<g:message code="lista.name.label" default="Name" />
		<span class="required-indicator">*</span>
	</label>
	<g:textField name="name" required="" value="${listaInstance?.name}"/>

</div>

<div class="fieldcontain ${hasErrors(bean: listaInstance, field: 'produtos', 'error')} ">
	<label for="produtos">
		<g:message code="lista.produtos.label" default="Produtos" />

	</label>
	<g:select name="produtos" from="${sharingshoplist.Produto.list()}" multiple="multiple" optionKey="id" size="5" value="${listaInstance?.produtos*.nome}" class="many-to-many"/>

</div>

<div class="fieldcontain ${hasErrors(bean: listaInstance, field: 'usuario', 'error')} ">
	<label for="usuario">
		<g:message code="usarios.produtos.label" default="Usuarios" />

	</label>
	<g:select name="usuarios" from="${sharingshoplist.Usuario.list()}" multiple="multiple" optionKey="id" size="5" value="${listaInstance?.usuarios*.email}" class="many-to-many"/>

</div>
