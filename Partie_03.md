**Explication du code – Partie_02**

1-  Le Hook useReducer
  Il sert à gérer un état complexe ou plusieurs types d’actions (plus puissant que useState).
  Il prend deux choses :
    une fonction reducer (qui explique comment l’état change),
    et un état initial ({ count: 0 }).
  Exemple :
   const [state, dispatch] = useReducer(reducer, { count: 0 });
    => state → contient l’état actuel (count)
    => dispatch → sert à envoyer une action (comme "increment" ou "reset")

2- La fonction reducer(state, action)
  Elle dit comment modifier l’état selon le type d’action reçue :
    "increment" → +1
    "decrement" → -1
    "reset" → 0
  C’est une seule fonction qui gère toutes les modifications possibles de ton compteur.

3- Les boutons
  Chaque bouton appelle dispatch() avec une action différente :
    dispatch({ type: "increment" })
    dispatch({ type: "decrement" })
    dispatch({ type: "reset" })

  => Cela provoque un nouvel état, puis le composant se met automatiquement à jour.


==> Le Hook useReducer permet de gérer les changements d’état de manière claire et structurée.
==> Dans cet exemple, il simplifie la gestion du compteur en regroupant toute la logique dans la fonction reducer.
==>C’est une méthode plus propre et plus évolutive que useState, surtout quand plusieurs actions peuvent modifier le même état.






