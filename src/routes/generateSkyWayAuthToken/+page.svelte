<script>
  import { onMount } from 'svelte';
  import { nowInSec, SkyWayAuthToken, uuidV4 } from "@skyway-sdk/room";
  let authToken = '';

  const appId = import.meta.env.VITE_SKY_WAY_APP_ID ? import.meta.env.VITE_SKY_WAY_APP_ID : '';
  const secretKey = import.meta.env.VITE_SKY_WAY_AUTH_TOKEN ? import.meta.env.VITE_SKY_WAY_AUTH_TOKEN : '';

  onMount(async () => {  
    console.log("env: ", import.meta.env.VITE_SKY_WAY_APP_ID)
    console.log("env: ", import.meta.env.VITE_SKY_WAY_AUTH_TOKEN)
    console.log("env: ", import.meta.env.VITE_SKY_WAY_SECRET_KEY)
    if (typeof window !== 'undefined' && window.RTCPeerConnection) {
      authToken = new SkyWayAuthToken({
        jti: uuidV4(),
        iat: nowInSec(),
        exp: nowInSec() + 60 * 60 * 24,
        scope: {
          app: {
            id: appId,
            turn: true,
            actions: ["read"],
            channels: [
              {
                id: "*",
                name: "*",
                actions: ["write"],
                members: [
                  {
                    id: "*",
                    name: "*",
                    actions: ["write"],
                    publication: {
                      actions: ["write"],
                    },
                    subscription: {
                      actions: ["write"],
                    },
                  },
                ],
                sfuBots: [
                  {
                    actions: ["write"],
                    forwardings: [
                      {
                        actions: ["write"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      }).encode(secretKey);
    }
  });
</script>

<main>
  <p>SkyWayAuthToken: <b>{authToken}</b></p>
</main>
  