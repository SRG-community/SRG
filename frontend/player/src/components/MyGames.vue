<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="col-sm-6 col-sm-offset-3">
        <h1>Hi, {{ name }}! Share your games and Earn!!!</h1>
        <button class="btn btn-warning"><a href="tg://msg?text=http://ruzzland.asuscomm.com ПОИГРАЙ КА">Share via Telegram!</a></button>
        <button class="btn btn-warning"><a href="whatsapp://send?text=http://ruzzland.asuscomm.com ПОИГРАЙ КА">Share via Whatsapp!</a></button>
        <div class="quote-area" v-if="quote">
          <h2>
            <blockquote>{{ quote }}</blockquote>
          </h2>
        </div>
      </div>
      <div class="modal fade" style="z-index: 1050;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <h4 class="modal-title">Подтверждение реестра</h4></div>
            <div class="modal-body">
              <form target="GWTBootstrap3_AbstractForm_secured_1" role="form"
                    class="form-horizontal">
                <fieldset>
                  <div class="form-group"><label class="control-label col-lg-4"
                                                 for="formDate">Дата</label>
                    <div class="col-lg-8"><p class="form-control-static"
                                             id="formDate"></p></div>
                  </div>
                  <div class="form-group"><label class="control-label col-lg-4"
                                                 for="formAmount">Сумма</label>
                    <div class="col-lg-8"><input type="text" class="form-control"
                                                 id="formAmount" disabled=""></div>
                  </div>
                  <div class="form-group"><label class="control-label col-lg-4"
                                                 for="formStatus">Статус</label>
                    <div class="col-lg-8"><input type="text" class="form-control"
                                                 id="formStatus" disabled=""></div>
                  </div>
                  <div class="form-group"><label class="control-label col-lg-4">Согласовать?</label>
                    <div class="col-lg-8"><label class="radio-inline"><input
                      type="radio" name="radio1" value="value1"
                      tabindex="0"><span>Да</span></label><label
                      class="radio-inline"><input type="radio" name="radio1"
                                                  value="value2" tabindex="0"><span>Нет</span></label>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-lg-offset-4 col-lg-8">
                      <button type="button" class="btn pull-right btn-primary"
                              data-dismiss="modal">Далее
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-12">
      <div class="panel panel-default">
        <div class="panel-heading"><h1 class="panel-title"><a href="whatsapp://send?text=http://ruzzland.asuscomm.com  ПОИГРАЙ КА">Share a game!</a>
          <a href="tg://msg?text=http://ruzzland.asuscomm.com ПОИГРАЙ КА">Share a game2!</a></h1></div>
        <div class="panel-body table-responsive">
          <table __gwtcellbasedwidgetimpldispatchingfocus="true"
                 __gwtcellbasedwidgetimpldispatchingblur="true"
                 class="table table-striped table-hover table-condensed table-bordered"
                 cellspacing="0" style="width: 100%; height: 300px;">
            <colgroup>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
            <tr __gwt_header_row="0">
              <th colspan="1" class="gwtb3-d gwtb3-d" __gwt_column="column-gwt-uid-1"
                  __gwt_header="header-gwt-uid-2">Actions
              </th>
              <th colspan="1" class="gwtb3-d" __gwt_column="column-gwt-uid-3"
                  __gwt_header="header-gwt-uid-4">Name
              </th>
              <th colspan="1" class="gwtb3-d" __gwt_column="column-gwt-uid-5"
                  __gwt_header="header-gwt-uid-6">Link
              </th>
            </tr>
            </thead>
            <tbody style="display: none;"></tbody>
            <tbody>
            <tr>
              <td align="center" colspan="5">
                <div>
                  <div aria-hidden="true"
                       style="width: 100%; height: 100%; padding: 0px; margin: 0px; display: none;">
                    <div aria-hidden="true"
                         style="width: 100%; height: 100%; display: none;"></div>
                  </div>
                  <div style="width: 100%; height: 100%; padding: 0px; margin: 0px;">
                    <div class="gwtb3-d" style="width: 100%; height: 100%;"><img
                      src="data:image/gif;base64,R0lGODlhKwALAPEAAP///0tKSqampktKSiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAKwALAAACMoSOCMuW2diD88UKG95W88uF4DaGWFmhZid93pq+pwxnLUnXh8ou+sSz+T64oCAyTBUAACH5BAkKAAAALAAAAAArAAsAAAI9xI4IyyAPYWOxmoTHrHzzmGHe94xkmJifyqFKQ0pwLLgHa82xrekkDrIBZRQab1jyfY7KTtPimixiUsevAAAh+QQJCgAAACwAAAAAKwALAAACPYSOCMswD2FjqZpqW9xv4g8KE7d54XmMpNSgqLoOpgvC60xjNonnyc7p+VKamKw1zDCMR8rp8pksYlKorgAAIfkECQoAAAAsAAAAACsACwAAAkCEjgjLltnYmJS6Bxt+sfq5ZUyoNJ9HHlEqdCfFrqn7DrE2m7Wdj/2y45FkQ13t5itKdshFExC8YCLOEBX6AhQAADsAAAAAAAAAAAA="
                      width="43" height="11" class="gwt-Image"></div>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
            <tfoot aria-hidden="true" style="display: none;"></tfoot>
          </table>
          <ul class="pagination"></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import auth from '../auth'

  export default {
    data() {
      return {
        quote: '',
        name: auth.user.name
      }
    },
    methods: {
      getQuote() {
        this.$http
          .get('/api/protected/random-quote', (data) => {
            this.quote = data;
          }, {
            // Attach the JWT header
            headers: auth.getAuthHeader()
          })
          .error((err) => console.log(err))
      }
    },
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate() {
        return auth.user.name != null
      }
    }
  }
</script>
