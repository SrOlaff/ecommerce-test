import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
/*  aqui o que o cara fez foi bem inteligente, ele tirou do array shop usando o metodo de desconstrução para que possamos fazer o map
apenas nos items que queremos, sem tocar no array SHOP_DATA, apenas pegando o items
*/
// Reminder: O filter é o seguinte, o primeiro parâmetro será o elemento, o segundo parâmetro será o indice dele dentro do array
// que se encontra e o terceiro será o arary total

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}

        {/* O que ele está fazendo aqui é: usando o filter para pegar pegar apenas 4 elementos 
        (caso o elemento satisfaça a condição dada ele passa, caso contrário ele é filtrado.
        ) */}
      </div>
    </div>
  );
};
export default CollectionPreview;
