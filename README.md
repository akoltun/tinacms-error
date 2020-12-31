Steps to reproduce error.
- Install packages: `yarn`
- Run project: `yarn dev`
- Visit page 1: `localhost:8000/one`
- Open TinaCMS editor - the form is present:

![The form in the first openned page](images/one-ok.png)


- Click on link "Two" in order to open second page - the form is empty

![No form in the second openned page](images/two-error.png)


- Reload the page by pressing `Ctrl+R` (or `Cmd+R` on mac)
- Now page Two has form:

![The form in the first openned page](images/two-ok.png)


- Click on link "One", the first page doesn't have form:

![No form in the second openned page](images/one-error.png)
