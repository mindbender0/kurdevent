const getEvents = async () => {
  try {
    const events = await fetch(
      "https://4000-monospace-kurdevent-1710360340399.cluster-mwrgkbggpvbq6tvtviraw2knqg.cloudworkstations.dev/events"
    );
    return events.json();
  } catch (error) {
    console.error("Error reading events data:", error);
    return [];
  }
};

export default getEvents;
