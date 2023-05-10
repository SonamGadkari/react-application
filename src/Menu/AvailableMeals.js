import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Biryani',
    description: 'Made with Indian spices, basmathi rice',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Chicken curry',
    description: 'Made with our authentic tikka masala',
    price: 9.99,
  },
  {
    id: 'm3',
    name: 'Samosa Chat',
    description: 'Made with Chickpeas, green chutney, yogurt, tamarind',
    price: 5.99,
  },
  {
    id: 'm4',
    name: 'Naan',
    description: 'Indian flat bread',
    price: 4.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <div>
        <ul>{mealsList}</ul>
      </div>
    </section>
  );
};

export default AvailableMeals;
