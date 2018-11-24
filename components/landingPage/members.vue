<template>
  <div
    class="members text-md-center mt-5">
    <p class="display-1 pt-5 grey--text">Proud Members</p>
    <v-layout>
      <v-flex>
        <v-card>
          <v-container
            grid-list-sm
            fluid>
            <v-layout
              row
              wrap>
              <v-flex
                v-for="(member,n) in members"
                :key="n"
                xs6
                sm2
                d-flex
              >
                <v-card
                  flat
                  tile
                  class="d-flex">
                  <v-container>
                    <v-img
                      :src="member.img"
                      aspect-ratio="1"
                      class="grey lighten-2 member"
                      @click="showInfo(member)"
                    >
                      <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5" />
                      </v-layout>
                    </v-img>
                    <span class="text--left">{{ member.name }}</span>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <div class="card">
          <!-- Header -->
          <div
            class="card-header">
            <v-img
              :src="current_member.img || 'https://picsum.photos/500/300?image=1'"
              aspect-ratio="1"
              class="grey lighten-2"
            />
            <span
              class="card-header__follow member"
              @click="dialog = false">
              X
            </span>
          </div>
          <!-- Content-->
          <div class="card-content">
            <div class="card-content__username">{{ current_member.name || '' }}</div>
            <div class="card-content__bio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam itaque eligendi repellendus adipisci sit in quam tempora, neque libero, suscipit animi praesentium aliquid. Nesciunt quis velit eligendi hic neque?</div>
          </div>
          <!-- Footer-->
          <div class="card-footer">
            <div class="card-footer__pens"> <span>@{{ current_member.twitter || '' }}</span>
              <div class="label">Twitter</div>
            </div>
            <div class="card-footer__followers"> <span>@{{ current_member.fb || '' }}</span>
              <div class="label">Facebook</div>
            </div>
            <div class="card-footer__following"> <span>@{{ current_member.github || '' }}</span>
              <div class="label">Github</div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MemberSearchBar from './memberSearchBar'
export default {
  name: 'Members',
  components: { MemberSearchBar },
  data: () => ({
    dialog: false,
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 18
    },
    current_member: {},
    members: [
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=3',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=4',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=5',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=6',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=7',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=8',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=9',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=10',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=11',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=21',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=12',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=22',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=13',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=23',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=14',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=24',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=15',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=15',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=16',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      },
      {
        name: 'Musa Bello',
        img: 'https://picsum.photos/500/300?image=1',
        twitter: 'musbell',
        fb: 'musbell',
        github: 'musbell'
      },
      {
        name: 'Timothy Olaleke',
        img: 'https://picsum.photos/500/300?image=2',
        twitter: 'timtech4u',
        fb: 'timtech4u',
        github: 'timtech4u'
      }
    ]
  }),
  methods: {
    showInfo(member) {
      this.dialog = true
      this.current_member = member
    }
  }
}
</script>

<style scoped>
.members {
  background-color: #ededee;
}
.member:hover {
  cursor: pointer;
}
.img-center {
  margin: auto;
}

.card {
  background: #ffffff;
  /* width: 300px; */
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  overflow: hidden;
}
.card-header {
  position: relative;
  /* background: #303841; */
  height: 200px;
  text-align: center;
  overflow: hidden;
}
.card-header__avatar {
  /* background: #303841; */
  background-position: center 30%;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
.card-header__follow {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 6px 10px;
  color: #333333;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;
}
.card-content {
  text-align: center;
  padding: 30px 20px;
}
.card-content__username {
  margin: 0 0 10px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.card-content__username .badge {
  display: inline-block;
  background: #fcd000;
  border-radius: 2px;
  margin: 0 10px 0;
  padding: 4px;
  color: #333333;
  font-size: 10px;
  font-weight: 600;
  vertical-align: middle;
}
.card-content__bio {
  color: #666666;
  font-size: 12px;
}
.card-footer {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: #f3f3f3;
  padding: 15px 40px;
  color: #333333;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.card-footer .label {
  display: block;
  margin: 4px 0 0;
  color: #666666;
  font-size: 10px;
  font-weight: 400;
}
</style>
