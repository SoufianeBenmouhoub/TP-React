**Explication du fonctionnement du code**


1- Rôle de useState

  Le Hook useState permet de créer et gérer une valeur d’état locale dans un composant fonctionnel.
  Il renvoie : 
   1- La valeur actuelle de l’état.
   2- Une fonction de mise à jour de cet état.

  a- Dans le composant Counter : 
        const [count, setCount] = useState(0);
     count représente la valeur actuelle du compteur (initialement 0).
     setCount permet de modifier cette valeur.
     Chaque appel à setCount provoque un nouveau rendu (re-render) du composant.
   
     => Quand l’utilisateur clique sur le bouton +1, le code : 
        onClick={() => setCount(count + 1)}
       met à jour la valeur de count et rafraîchit l’affichage.

  b- Dans le composant App :
        const [status, setStatus] = useState(true);
     status détermine si le composant Counter est affiché ou non.
     
     => Le bouton “Changer le statut” inverse la valeur :
        onClick={() => setStatus(!status)}
      Quand status devient false, le composant Counter est retiré du DOM (démonté).


2- Rôle de useEffect

   Le Hook useEffect permet d’exécuter du code après chaque rendu du composant.
   Il remplace les anciennes méthodes de cycle de vie comme componentDidMount, componentDidUpdate, et componentWillUnmount.

   useEffect(() => {
    console.log("MONTAGE / MISE À JOUR :", count);

     return () => {
    console.log("NETTOYAGE :", count);
    };
   });

   => Le premier console.log s’exécute :
     * au montage (premier affichage du composant),
     * à chaque mise à jour (quand count change).
   => La fonction retournée (après return) est une fonction de nettoyage :
     * elle s’exécute avant chaque mise à jour,
     * lors du démontage du composant (Counter supprimé du DOM).


3- La fonction de nettoyage est-elle appelée

  La fonction de nettoyage :
   => Est appelée juste avant chaque re-rendu, c’est-à-dire avant que useEffect soit relancé.
      Exemple : quand count passe de 0 à 1.

   => Est également appelée lorsque le composant est démonté,
      Exemple : quand on clique sur “Changer le statut” pour masquer Counter.

  Elle sert généralement à libérer des ressources (timers, abonnements, écouteurs d’événements…).


4- Quand on clique sur “Changer le statut”

  => La fonction setStatus(!status) inverse la valeur de status.
  => Si status devient false :
    Le composant Counter est démonté.
    Sa fonction de nettoyage (dans useEffect) s’exécute une dernière fois.
  => Si status redevient true :
    Le composant Counter est recréé (monté).
    useEffect s’exécute à nouveau (montage).

 Ainsi, le bouton permet de montrer ou cacher dynamiquement le composant Counter.


5- Différence entre montage, mise à jour et démontage et 


  a - montage : Le composant apparaît pour la première fois dans le DOM

    ==> Effet sur le composant : useEffect s’exécute après le rendu initial.

   


  b - mise à jour : Une donnée d’état change (count dans notre cas).

    ==> Effet sur le composant : useEffect se relance, après exécution de la fonction de nettoyage.


  c - démontage : Le composant est retiré du DOM (status devient false).

    ==> Effet sur le composant : Seule la fonction de nettoyage s’exécute.


6- Résumé du cycle de vie dans ce code

  * Montage : Counter s’affiche → useEffect s’exécute.

  * Mise à jour : count change → NETTOYAGE → nouveau rendu → MONTAGE / MISE À JOUR.

  * Démontage : status devient false → NETTOYAGE final → composant retiré du DOM.


7- Conclusion 

  En résumé, ce code met en pratique les bases de React avec les Hooks useState et useEffect.
  On comprend comment un composant peut s’actualiser automatiquement en fonction de son état et comment React gère le cycle complet de vie : de la création à la suppression.
  Ces notions sont essentielles pour créer des composants réactifs et propres dans les applications modernes.























   


