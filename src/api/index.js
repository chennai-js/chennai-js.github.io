export const getJobs = async () => {
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1cNWOxv5M_NSV_ucf4ywLemWgu6r0Z3h2HHDyiDGrTho/default/public/full?alt=json"
  );

  return response.json();
};

export const requestSlackAccess = async ({ name, email }) => {
  const text = `${name} (${email}) would like to join our Slack. Can you please send an invite?`;
  const response = await fetch(
    "https://hooks.slack.com/services/T412S9JCV/BAVFN0LGL/8XG76nQ5nIjDkFdtlLI4kXs",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ text })
    }
  );
};
