# Vicoders Drone Plugin Secret To ENV

- [Vicoders Drone Plugin Secret To ENV](#vicoders-drone-plugin-secret-to-env)
  - [Usage](#usage)

<a name="usage"></a>

## Usage

```
kind: pipeline
name: default

steps:
- name: env
    image: nightfuryest/drone-plugin-secret-to-env
    settings:
      template: .env.staging.template
      file: .env
      envs:
        - GIT_TOKEN
        - GIT_DEFAULT_ORGANIZATION
        - GIT_DEFAULT_BRANCH
      GIT_TOKEN:
        from_secret: GIT_TOKEN
      GIT_DEFAULT_ORGANIZATION:
        from_secret: GIT_DEFAULT_ORGANIZATION
      GIT_DEFAULT_BRANCH:
        from_secret: GIT_DEFAULT_BRANCH
```