# Wonka Table Tracker

Increase your CO2 tolerance and thereby your breath-hold time efficiently and safely.
Instead of purely relying on the clock (as CO2 tables usually do), Wonka tables focus on your body's feedback - diaphram contractions.
[Learn more about wonka tables on here.](https://getstamina.app/blog/wonka-tables)

This website tracks one of your Wonka table sessions, logging how long each breath hold was, how long your recovery time between breath hold repetitions is, and when exactly the contractions occurred for each repetition.
(Tracking in the "keep track of" sense, not the way that is sadly popular on the internet nowadays. No data is sent to anyone.)
All of this information is neatly visualized in a chart and also available in table format.

Several parameters are configurable:

| Setting | Explanation | Values |
|--------:|:------------|-------:|
| Target Reps | The target number of breath-hold repetitions to complete for the session. (You can always go beyond this target after the last rep should you so desire.) | Default: 8 |
| Contractions / Rep | A breath hold (repetition) completes when this number of contractions is reached in the current repetition. | Default: 25 |
| Min. hold time [s] (optional) | Delay completion of a breath hold (repetition) to at least this many seconds, even if you have already hit your contractions/rep goal. | Default: empty<br/>The blog mentions 75s as a variant. |
| Max. hold time after first contraction [s] (optional) | Delay the completion of a breath hold (repetition) at least this many seconds after the first contraction, even if you have already hit your contractions/rep goal. | Default: empty<br/>The blog mentions 45s and 60s. |
| Min. recovery time [s] | Minimum duration of the recovery time between two consecutive breath holds in seconds. This mainly exists to prevent accidentally starting the next repetition without noticing that the previous one has been completed. | Default: 1.0s |

Here is my first session:
![Screenshot of my first wonka table; tracked by this tool.](screenshot.png)
I'm sure you can do better. ;)

---

I have vibe-coded this tool for myself (using Gemini 3) since the stamina app locks wonka tables behind a paywall.
Any improvement suggestions and bug reports are welcome.
