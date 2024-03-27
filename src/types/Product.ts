export interface CatalogApiResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Content[];
  number: number;
  sort: Sort;
  pageable: Pageable;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface Content {
  idProduto: number;
  categoria: string;
  titulo: string;
  descricao: string;
  tecido: string;
  variacaoList: VariacaoList[];
}

export interface VariacaoList {
  idVariacao: number;
  fotos: Foto[];
  sku: string;
  cor: string;
  tamanho: string;
  preco: number;
  taxaDesconto: number;
  ativo: string;
  criado: string;
  editado: string;
}

export interface Foto {
  idFoto: number;
  arquivo: string[];
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Pageable {
  offset: number;
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
