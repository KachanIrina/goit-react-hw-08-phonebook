const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(70vh - 60px)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'rgb(19, 13, 8)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Phonebook!</h1>
    </div>
  );
}
