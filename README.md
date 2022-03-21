# Requisitos da dinâmica

## 1. Refatore a aplicação para utilizar Hooks
Você deve refatorar todos os componentes de classe presentes na aplicação para componentes funcionais, e com isso, passar a utilizar Hooks para manter todas as funcionalidades e lógica envolvidas no estado e ciclo de vida.

  * os componentes de classe `App`, `Header`, `Filters` e `List` devem ser refatorados para componentes funcionais e usando Hooks;

  * a aplicação deve se manter funcionando ao final da refatoração.


## 2. Utilize o Context API para gerir o estado global da aplicação
Você deve utilizar o Context API para gerir o estado global da aplicação, ou seja, deve remover o estado contido no componente `App` e passar para o Context.

  * Retire o estado do componente `App` e passe para o Context;

  * Refatore a forma como os outros componentes da aplicação vão ler o estado e alterá-lo;

**Dica:** utilize o [checklist](https://gist.github.com/ANDREHORMAN1994/e299f113e3e750276e8da0a8982b59f4) como um passo a passo inicial ao montar o seu Context.
